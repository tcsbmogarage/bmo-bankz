import {DefaultCrudRepository} from '@loopback/repository';
import {Notifications, NotificationsRelations} from '../models';
import {DbFsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NotificationsRepository extends DefaultCrudRepository<
  Notifications,
  typeof Notifications.prototype.Id,
  NotificationsRelations
> {
  constructor(
    @inject('datasources.dbFS') dataSource: DbFsDataSource,
  ) {
    super(Notifications, dataSource);
  }
}
