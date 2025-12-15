import { InterestPoint } from '@/shared/types';

type RealtySharedType = {
  _id: string;
  description: string;
  address: InterestPoint;
  images?: string;
  docs?: string;
};

export interface RealtyApartment extends RealtySharedType {
  propertySubtype: 'flat' | 'apartments' | 'room';
  hasElevator: boolean;
  mortgageAvailable: boolean;
  buyoutAvailable: boolean;
  ceilingHeight: number;
  buildingMaterial: 'brick' | 'panel' | 'monolith' | 'wood' | 'block';
  hasPets: boolean;
  layout: 'open_plan' | 'studio' | 'separate_rooms' | 'adjacent_rooms';
  total_area: number;
  condition: RealtyCondition;
  communications: RealtyCommunication[];
  highVoltagePower: boolean;
  cadastral_number: string;
  building_year: string;
  flat: {
    apartmentType: 'secondary' | 'new_building';
    rooms: number;
    layoutType: 'studio' | 'isolated' | 'adjacent' | 'free';
    hasBalcony: boolean;
    furnished: boolean;
  };
  room: {
    hasBalcony: boolean;
    furnished: boolean;
  };
}

export interface RealtyHouse extends RealtySharedType {
  rooms: number;
  hasWell: boolean;
  totalArea: number;
  condition: RealtyCondition;
  communications: RealtyCommunication[];
  highVoltagePower: boolean;
  cadastralNumber: 'string';
  buildingYear: 'string';
}

export interface RealtyIndustrial extends RealtySharedType {
  hasHighVoltage: boolean;
  hasIndustrialSewage: boolean;
  hasIndustrialWaterSupply: boolean;
  hasCraneTracks: boolean;
  hasFreightElevator: boolean;
  hasDustProofCoating: boolean;
  totalArea: number;
  condition: RealtyCondition;
  communications: RealtyCommunication[];
  highVoltagePower: boolean;
  cadastralNumber: string;
  buildingYear: string;
  production: {
    industrialSubtype: 'warehouse' | 'production';
    truckParkingSpaces: number;
    floorLoadCapacity: number;
    ceilingHeight: number;
    hasOfficeSpace: boolean;
  };
  warehouse: {
    climateType: 'dry' | 'refrigerated' | 'freezer' | 'heated';
    hasClimateControl: boolean;
    hasLoadingRamps: boolean;
  };
}

type RealtyCommunication = 'electricity' | 'gas' | 'water' | 'sewage';
type RealtyCondition = 'good' | 'requires_renovation' | 'needs_renovation';

export interface RealtyCommercial extends RealtySharedType {
  commercial_subtype: 'office' | 'cafeteria' | 'free_zone' | 'store';
  wetPoints?: boolean;
  maxElectricalLoad?: number;
  hasParking?: boolean;
  total_area: number;
  condition?: RealtyCondition;
  communications?: RealtyCommunication[];
  highVoltagePower?: boolean;
  cadastral_number: string;
  building_year: string;
  office?: {
    layoutType: 'open_plan' | 'partitioned' | 'individual';
    buildingClass: 'class_a' | 'class_b' | 'class_c';
  };
  catering?: {
    hasUnloadingConditions: boolean;
  };
}

export interface RealtyLand extends RealtySharedType {
  roads: 'none' | 'dirt' | 'gravel' | 'asphalt' | 'concrete_slabs';
  landType: 'residential' | 'commercial' | 'agricultural';
  totalArea: number;
}

export interface RealtyParking extends RealtySharedType {
  specialType:
    | 'garage'
    | 'parking_space'
    | 'parking'
    | 'garage_cooperative'
    | 'parking_lot';
  buildingYear: 'string';
}
