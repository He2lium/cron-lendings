import { api } from '@/shared/services/api/api';
import { AnyObject, BaseListResponse, InterestPoint } from '@/shared/types';
import { pathToURL } from '@/shared/utils/pathToURL';

export const getInterestPoints = async (): Promise<BaseListResponse<InterestPoint>> => {
  const response = await api.get('/proxy/interest-point');
  return response.json();
};

export const createInterestPoint = async (json: AnyObject) => {
  const response = await api.post('/proxy/interest-point', json);
  return response.json();
};

export const deleteInterestPoint = async ({ pathParams }: AnyObject) => {
  const response = await api.delete(pathToURL('/proxy/interest-point/:id', pathParams));
  return response.json();
};
