import {Entity, model, property} from '@loopback/repository';

@model()
export class Transactions extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
  })
  User_Account_Number?: string;

  @property({
    type: 'string',
  })
  Source_Account_Name?: string;

  @property({
    type: 'string',
  })
  Source_Account_Number?: string;

  @property({
    type: 'string',
  })
  Amount?: string;

  @property({
    type: 'string',
  })
  Transaction_Status?: string;

  @property({
    type: 'date',
  })
  Transaction_Time?: string;

  @property({
    type: 'string',
  })
  Comment?: string;


  constructor(data?: Partial<Transactions>) {
    super(data);
  }
}

export interface TransactionsRelations {
  // describe navigational properties here
}

export type TransactionsWithRelations = Transactions & TransactionsRelations;
