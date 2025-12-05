import { api } from '@/shared/services/api/api';
import { AnyObject } from '@/shared/types';

export const getAuthUser = async () => {
  const response = await api.get('/proxy/user');
  return response.json();
};

export const authByToken = async (json: AnyObject) => {
  const response = await api.post('/proxy/auth/by-token', { json });
  return response.json();
};
