import {DefaultCrudRepository} from '@loopback/repository';
import {Products, ProductsRelations} from '../models';
import {DbFsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductsRepository extends DefaultCrudRepository<
  Products,
  typeof Products.prototype.id,
  ProductsRelations
> {
  constructor(
    @inject('datasources.dbFS') dataSource: DbFsDataSource,
  ) {
    super(Products, dataSource);
  }
}
