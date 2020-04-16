import {Entity, model, property} from '@loopback/repository';

@model()
export class AccountBalances extends Entity {
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
  Amount?: string;

  @property({
    type: 'string',
  })
  Last_Updated_Time?: string;


  constructor(data?: Partial<AccountBalances>) {
    super(data);
  }
}

export interface AccountBalancesRelations {
  // describe navigational properties here
}

export type AccountBalancesWithRelations = AccountBalances & AccountBalancesRelations;
