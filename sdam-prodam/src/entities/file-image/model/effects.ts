import { BaseListResponse } from '@/shared/types';
import { createEffect } from 'effector';
import { createImage, getImages } from './api';
import { Image } from './types';

export const getImagesFx = createEffect<any, BaseListResponse<Image>, Error>(getImages);
export const createImageFx = createEffect(createImage);
