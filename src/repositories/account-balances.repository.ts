import {DefaultCrudRepository} from '@loopback/repository';
import {AccountBalances, AccountBalancesRelations} from '../models';
import {DbFsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AccountBalancesRepository extends DefaultCrudRepository<
  AccountBalances,
  typeof AccountBalances.prototype.Id,
  AccountBalancesRelations
> {
  constructor(
    @inject('datasources.dbFS') dataSource: DbFsDataSource,
  ) {
    super(AccountBalances, dataSource);
  }
}
