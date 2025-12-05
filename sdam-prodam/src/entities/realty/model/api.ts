import { api } from '@/shared/services/api/api';
import { AnyObject } from '@/shared/types';
import { pathToURL } from '@/shared/utils/pathToURL';

export const fetchRealties = async ({ pathParams, ...json }: AnyObject) => {
  const response = await api.get(
    pathToURL('/proxy/realty/:realtyType', pathParams),
    json
  );

  return response.json();
};

export const createRealty = async ({ pathParams, ...json }: AnyObject) => {
  const response = await api.post(
    pathToURL('/proxy/realty/:realtyType', pathParams),
    json
  );
  return response.json();
};

export const generateRealtyDesc = async ({ pathParams, ...json }: AnyObject) => {
  const response = await api.post(
    pathToURL('/proxy/realty/:realtyType/description-generate', pathParams),
    { json }
  );

  return response.json();
};
