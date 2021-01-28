import {Address} from './address';

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  address: Address;
}
