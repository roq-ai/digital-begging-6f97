import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BeggarInterface {
  id?: string;
  story?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BeggarGetQueryInterface extends GetQueryInterface {
  id?: string;
  story?: string;
  user_id?: string;
}
