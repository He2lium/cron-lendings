import { api } from '@/shared/services/api/api';
import { AnyObject, BaseListResponse } from '@/shared/types';
import { pathToURL } from '@/shared/utils/pathToURL';
import { RealtyCommercial } from './types';

export const fetchRealties = async ({
  pathParams,
  ...json
}: AnyObject): Promise<BaseListResponse<RealtyCommercial>> => {
  const response = await api.get(
    pathToURL('/proxy/realty/:realtyType', pathParams),
    json
  );

  return response.json();
};

export const createRealty = async ({ pathParams, ...json }: AnyObject) => {
  const response = await api.post(pathToURL('/proxy/realty/:realtyType', pathParams), {
    json,
  });
  return response.json();
};

export const updateRealty = async ({ pathParams, ...json }: AnyObject) => {
  const response = await api.patch(
    pathToURL('/proxy/realty/:realtyType/:id', pathParams),
    {
      json,
    }
  );
  return response.json();
};

export const fetchRealty = async ({
  pathParams,
}: AnyObject): Promise<RealtyCommercial> => {
  const response = await api.get(pathToURL('/proxy/realty/:realtyType/:id', pathParams));
  return response.json();
};

export const generateRealtyDesc = async ({ pathParams, ...json }: AnyObject) => {
  const response = await api.post(
    pathToURL('/proxy/realty/:realtyType/description-generate', pathParams),
    { json }
  );

  return response.json();
};
