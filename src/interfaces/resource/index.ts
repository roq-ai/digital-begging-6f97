import { GetQueryInterface } from 'interfaces';

export interface ResourceInterface {
  id?: string;
  name: string;
  type: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ResourceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
}
