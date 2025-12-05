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

export interface InterestPoint {
  city_id: string;
  district: string;
  street: string;
  house_number: string;
  building: string;
  entrance: string;
  floor: number;
  totalFloors: number;
  unit: string;
  notice: string;
  microdistrict: string;
  cadastral_number: string;
  coordinates: number[];
  postal_code: string;
}
