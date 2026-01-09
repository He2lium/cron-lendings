import { Address } from '@/shared/types';

export interface InterestPoint {
  _id: string;
  address: Address;
  title: string;
  subtitle: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  leadsCount: number;
  // city: string;
  // district: string;
  // street: string;
  // house_number: string;
  // building: string;
  // entrance: string;
  // floor: number;
  // total_floors: number;
  // unit: string;
  // notice: string;
  // microdistrict: string;
  // cadastral_number: string;
  // coordinates: number[];
  // postal_code: string;
}
