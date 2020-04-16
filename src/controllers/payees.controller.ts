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
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Payees} from '../models';
import {PayeesRepository} from '../repositories';

export class PayeesController {
  constructor(
    @repository(PayeesRepository)
    public payeesRepository : PayeesRepository,
  ) {}

  @post('/payees', {
    responses: {
      '200': {
        description: 'Payees model instance',
        content: {'application/json': {schema: getModelSchemaRef(Payees)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Payees, {
            title: 'NewPayees',
            exclude: ['Id'],
          }),
        },
      },
    })
    payees: Omit<Payees, 'Id'>,
  ): Promise<Payees> {
    return this.payeesRepository.create(payees);
  }

  @get('/payees/count', {
    responses: {
      '200': {
        description: 'Payees model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Payees) where?: Where<Payees>,
  ): Promise<Count> {
    return this.payeesRepository.count(where);
  }

  @get('/payees', {
    responses: {
      '200': {
        description: 'Array of Payees model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Payees, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Payees) filter?: Filter<Payees>,
  ): Promise<Payees[]> {
    return this.payeesRepository.find(filter);
  }

  @patch('/payees', {
    responses: {
      '200': {
        description: 'Payees PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Payees, {partial: true}),
        },
      },
    })
    payees: Payees,
    @param.where(Payees) where?: Where<Payees>,
  ): Promise<Count> {
    return this.payeesRepository.updateAll(payees, where);
  }

  @get('/payees/{id}', {
    responses: {
      '200': {
        description: 'Payees model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Payees, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Payees, {exclude: 'where'}) filter?: FilterExcludingWhere<Payees>
  ): Promise<Payees> {
    return this.payeesRepository.findById(id, filter);
  }

  @patch('/payees/{id}', {
    responses: {
      '204': {
        description: 'Payees PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Payees, {partial: true}),
        },
      },
    })
    payees: Payees,
  ): Promise<void> {
    await this.payeesRepository.updateById(id, payees);
  }

  @put('/payees/{id}', {
    responses: {
      '204': {
        description: 'Payees PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() payees: Payees,
  ): Promise<void> {
    await this.payeesRepository.replaceById(id, payees);
  }

  @del('/payees/{id}', {
    responses: {
      '204': {
        description: 'Payees DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.payeesRepository.deleteById(id);
  }
}
