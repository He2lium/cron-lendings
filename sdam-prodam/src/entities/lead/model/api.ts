import { api } from '@/shared/services/api/api';
import { AnyObject, BaseListResponse } from '@/shared/types';
import { pathToURL } from '@/shared/utils/pathToURL';
import { Lead } from './types';

export const getLeads = async (): Promise<BaseListResponse<Lead>> => {
  const response = await api.get('/proxy/leads');
  return response.json();
};

export const getLead = async ({ pathParams }: AnyObject): Promise<Lead> => {
  const response = await api.get(pathToURL('/proxy/leads', pathParams));
  return response.json();
};

export const createLead = async (json: AnyObject) => {
  const response = await api.post('/proxy/leads', json);
  return response.json();
};

export const deleteLead = async ({ pathParams }: AnyObject) => {
  const response = await api.delete(pathToURL('/proxy/leads/:id', pathParams));
  return response.json();
};
