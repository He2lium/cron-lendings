export type AnyObject = Record<string, any>;

export interface MetaResponse {
  total: number;
  size?: number;
  page?: number;
}

export interface BaseListResponse<T> {
  data: T[];
  meta: MetaResponse;
}

export interface Address {
  city: string;
  district: string;
  street: string;
  house_number: string;
  building: string;
  entrance: string;
  floor: number;
  total_floors: number;
  coordinates: {
    type: string;
    coordinates: number[][];
  };
  unit: string;
  notice: string;
  microdistrict: string;
  cadastral_number: string;
  postal_code: string;
}
