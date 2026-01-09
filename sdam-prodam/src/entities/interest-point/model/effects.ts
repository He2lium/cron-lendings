import { createEffect } from 'effector';
import {
  createInterestPoint,
  deleteInterestPoint,
  getInterestPoints,
  getInterestPointsByPoligon,
} from './api';

export const getInterestPointsFx = createEffect(getInterestPoints);
export const getInterestPointsByPoligonFx = createEffect(getInterestPointsByPoligon);
export const creatInterestPointFx = createEffect(createInterestPoint);
export const deletInterestPointFx = createEffect(deleteInterestPoint);
