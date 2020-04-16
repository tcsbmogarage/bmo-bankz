import {Entity, model, property} from '@loopback/repository';

@model()
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
  })
  Title?: string;

  @property({
    type: 'string',
  })
  First_Name?: string;

  @property({
    type: 'string',
  })
  Last_Name?: string;

  @property({
    type: 'string',
  })
  Short_Name?: string;

  @property({
    type: 'string',
  })
  Email?: string;

  @property({
    type: 'string',
  })
  Passcode?: string;

  @property({
    type: 'string',
  })
  Gender?: string;

  @property({
    type: 'string',
  })
  Occupation?: string;

  @property({
    type: 'string',
  })
  Address?: string;

  @property({
    type: 'string',
  })
  Zipcode?: string;

  @property({
    type: 'string',
  })
  Mobile_Number?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  Account_Numbers?: object[];

  @property({
    type: 'boolean',
    default: false,
  })
  BMO_Mortgage_Loan?: boolean;

  @property({
    type: 'array',
    itemType: 'object',
  })
  BMO_Credit_Cards?: object[];

  @property({
    type: 'boolean',
  })
  Other_Bank_Credit_Cards?: boolean;

  @property({
    type: 'string',
    default: '$0',
  })
  Average_Flying_Expenses?: string;


  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
