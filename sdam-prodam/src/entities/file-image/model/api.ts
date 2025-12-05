import { api } from '@/shared/services/api/api';
import { AnyObject, BaseListResponse } from '@/shared/types';
import { pathToURL } from '@/shared/utils/pathToURL';
import { Image } from './types';

export const getImages = async (): Promise<BaseListResponse<Image>> => {
  const response = await api.get('/proxy/file/image/list');
  return response.json();
};

export const createImage = async (json: AnyObject) => {
  const response = await api.put('/proxy/file/image/upload', json);
  return response.json();
};

export const deleteImage = async ({ pathParams }: AnyObject) => {
  const response = await api.delete(
    pathToURL('/proxy/file/image/delete/by-id/:id', pathParams)
  );
  return response.json();
};
