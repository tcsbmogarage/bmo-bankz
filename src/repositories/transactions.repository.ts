import {DefaultCrudRepository} from '@loopback/repository';
import {Transactions, TransactionsRelations} from '../models';
import {DbFsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TransactionsRepository extends DefaultCrudRepository<
  Transactions,
  typeof Transactions.prototype.Id,
  TransactionsRelations
> {
  constructor(
    @inject('datasources.dbFS') dataSource: DbFsDataSource,
  ) {
    super(Transactions, dataSource);
  }
}
