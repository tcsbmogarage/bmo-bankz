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
import {AccountBalances} from '../models';
import {AccountBalancesRepository} from '../repositories';

export class AccountBalancesController {
  constructor(
    @repository(AccountBalancesRepository)
    public accountBalancesRepository : AccountBalancesRepository,
  ) {}

  @post('/account-balances', {
    responses: {
      '200': {
        description: 'AccountBalances model instance',
        content: {'application/json': {schema: getModelSchemaRef(AccountBalances)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountBalances, {
            title: 'NewAccountBalances',
            exclude: ['Id'],
          }),
        },
      },
    })
    accountBalances: Omit<AccountBalances, 'Id'>,
  ): Promise<AccountBalances> {
    return this.accountBalancesRepository.create(accountBalances);
  }

  @get('/account-balances/count', {
    responses: {
      '200': {
        description: 'AccountBalances model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(AccountBalances) where?: Where<AccountBalances>,
  ): Promise<Count> {
    return this.accountBalancesRepository.count(where);
  }

  @get('/account-balances', {
    responses: {
      '200': {
        description: 'Array of AccountBalances model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(AccountBalances, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(AccountBalances) filter?: Filter<AccountBalances>,
  ): Promise<AccountBalances[]> {
    return this.accountBalancesRepository.find(filter);
  }

  @patch('/account-balances', {
    responses: {
      '200': {
        description: 'AccountBalances PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountBalances, {partial: true}),
        },
      },
    })
    accountBalances: AccountBalances,
    @param.where(AccountBalances) where?: Where<AccountBalances>,
  ): Promise<Count> {
    return this.accountBalancesRepository.updateAll(accountBalances, where);
  }

  @get('/account-balances/{id}', {
    responses: {
      '200': {
        description: 'AccountBalances model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AccountBalances, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(AccountBalances, {exclude: 'where'}) filter?: FilterExcludingWhere<AccountBalances>
  ): Promise<AccountBalances> {
    return this.accountBalancesRepository.findById(id, filter);
  }

  @patch('/account-balances/{id}', {
    responses: {
      '204': {
        description: 'AccountBalances PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountBalances, {partial: true}),
        },
      },
    })
    accountBalances: AccountBalances,
  ): Promise<void> {
    await this.accountBalancesRepository.updateById(id, accountBalances);
  }

  @put('/account-balances/{id}', {
    responses: {
      '204': {
        description: 'AccountBalances PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() accountBalances: AccountBalances,
  ): Promise<void> {
    await this.accountBalancesRepository.replaceById(id, accountBalances);
  }

  @del('/account-balances/{id}', {
    responses: {
      '204': {
        description: 'AccountBalances DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.accountBalancesRepository.deleteById(id);
  }
}
