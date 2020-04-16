import {DefaultCrudRepository} from '@loopback/repository';
import {Payees, PayeesRelations} from '../models';
import {DbFsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PayeesRepository extends DefaultCrudRepository<
  Payees,
  typeof Payees.prototype.Id,
  PayeesRelations
> {
  constructor(
    @inject('datasources.dbFS') dataSource: DbFsDataSource,
  ) {
    super(Payees, dataSource);
  }
}
