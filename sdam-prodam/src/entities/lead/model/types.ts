import { Address } from '@/shared/types';

export interface Lead {
  users_who_received: [];
  _id: string;
  interest_point_id: string;
  source: string;
  interest_amount: number;
  _interest_point: {
    _id: string;
    address: Address;
    counter: 8;
    createdAt: string;
    updatedAt: string;
    title?: string;
    subtitle?: string;
    id: string;
  };
  id: string;
}
