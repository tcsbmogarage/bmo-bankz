import {Entity, model, property} from '@loopback/repository';

@model()
export class Notifications extends Entity {
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
    type: 'number',
  })
  Priority?: number;

  @property({
    type: 'string',
  })
  Source?: string;

  @property({
    type: 'date',
  })
  Expiry_Date?: string;

  @property({
    type: 'boolean',
  })
  Status?: boolean;

  @property({
    type: 'string',
  })
  Message_Detail?: string;

  @property({
    type: 'string',
  })
  Message_Summary?: string;

  @property({
    type: 'date',
  })
  Posted_Time?: string;


  constructor(data?: Partial<Notifications>) {
    super(data);
  }
}

export interface NotificationsRelations {
  // describe navigational properties here
}

export type NotificationsWithRelations = Notifications & NotificationsRelations;
