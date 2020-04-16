import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Transactions} from '../models';
import {TransactionsRepository} from '../repositories';

export class TransactionsController {
  constructor(
    @repository(TransactionsRepository)
    public transactionsRepository : TransactionsRepository,
  ) {}

  @post('/transactions', {
    responses: {
      '200': {
        description: 'Transactions model instance',
        content: {'application/json': {schema: getModelSchemaRef(Transactions)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transactions, {
            title: 'NewTransactions',
            exclude: ['Id'],
          }),
        },
      },
    })
    transactions: Omit<Transactions, 'Id'>,
  ): Promise<Transactions> {
    return this.transactionsRepository.create(transactions);
  }

  @get('/transactions/count', {
    responses: {
      '200': {
        description: 'Transactions model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Transactions) where?: Where<Transactions>,
  ): Promise<Count> {
    return this.transactionsRepository.count(where);
  }

  @get('/transactions', {
    responses: {
      '200': {
        description: 'Array of Transactions model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Transactions, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Transactions) filter?: Filter<Transactions>,
  ): Promise<Transactions[]> {
    return this.transactionsRepository.find(filter);
  }

  @patch('/transactions', {
    responses: {
      '200': {
        description: 'Transactions PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transactions, {partial: true}),
        },
      },
    })
    transactions: Transactions,
    @param.where(Transactions) where?: Where<Transactions>,
  ): Promise<Count> {
    return this.transactionsRepository.updateAll(transactions, where);
  }

  @get('/transactions/{id}', {
    responses: {
      '200': {
        description: 'Transactions model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Transactions, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Transactions, {exclude: 'where'}) filter?: FilterExcludingWhere<Transactions>
  ): Promise<Transactions> {
    return this.transactionsRepository.findById(id, filter);
  }

  @patch('/transactions/{id}', {
    responses: {
      '204': {
        description: 'Transactions PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transactions, {partial: true}),
        },
      },
    })
    transactions: Transactions,
  ): Promise<void> {
    await this.transactionsRepository.updateById(id, transactions);
  }

  @put('/transactions/{id}', {
    responses: {
      '204': {
        description: 'Transactions PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() transactions: Transactions,
  ): Promise<void> {
    await this.transactionsRepository.replaceById(id, transactions);
  }

  @del('/transactions/{id}', {
    responses: {
      '204': {
        description: 'Transactions DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.transactionsRepository.deleteById(id);
  }
}
