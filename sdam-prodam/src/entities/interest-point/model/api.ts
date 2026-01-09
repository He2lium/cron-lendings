import { api } from '@/shared/services/api/api';
import { AnyObject, BaseListResponse } from '@/shared/types';
import { pathToURL } from '@/shared/utils/pathToURL';
import { InterestPoint } from './types';

export const getInterestPoints = async (): Promise<BaseListResponse<InterestPoint>> => {
  const response = await api.get('/proxy/interest-point');
  return response.json();
};

export const getInterestPointsByPoligon = async (
  json: AnyObject
): Promise<BaseListResponse<InterestPoint>> => {
  const response: any = await api
    .post('/proxy/interest-point/by-poligon', { json })
    .json();

  return {
    data: response,
    meta: {
      total: response?.length,
    },
  };
};

export const createInterestPoint = async (json: AnyObject) => {
  const response = await api.post('/proxy/interest-point', json);
  return response.json();
};

export const deleteInterestPoint = async ({ pathParams }: AnyObject) => {
  const response = await api.delete(pathToURL('/proxy/interest-point/:id', pathParams));
  return response.json();
};
