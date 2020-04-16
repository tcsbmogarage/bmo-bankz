import {Entity, model, property} from '@loopback/repository';

@model()
export class Payees extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
  })
  User_Id?: string;

  @property({
    type: 'string',
  })
  Payee_Short_Name?: string;

  @property({
    type: 'string',
  })
  Payee_Account_Name?: string;

  @property({
    type: 'string',
  })
  Payee_Account_Number?: string;

  @property({
    type: 'number',
  })
  Payee_Account_Limit?: number;

  @property({
    type: 'boolean',
    default: false,
  })
  Is_A_Safe_Zone_Payee?: boolean;


  constructor(data?: Partial<Payees>) {
    super(data);
  }
}

export interface PayeesRelations {
  // describe navigational properties here
}

export type PayeesWithRelations = Payees & PayeesRelations;
