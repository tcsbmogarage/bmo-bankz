import {DefaultCrudRepository} from '@loopback/repository';
import {Users, UsersRelations} from '../models';
import {DbFsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.Id,
  UsersRelations
> {
  constructor(
    @inject('datasources.dbFS') dataSource: DbFsDataSource,
  ) {
    super(Users, dataSource);
  }
}
