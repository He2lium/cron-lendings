import { BaseListResponse, InterestPoint } from '@/shared/types';
import { createEffect } from 'effector';
import { createInterestPoint, deleteInterestPoint, getInterestPoints } from './api';

export const getInterestPointsFx = createEffect<
  any,
  BaseListResponse<InterestPoint>,
  Error
>(getInterestPoints);
export const creatInterestPointFx = createEffect(createInterestPoint);
export const deletInterestPointFx = createEffect(deleteInterestPoint);
