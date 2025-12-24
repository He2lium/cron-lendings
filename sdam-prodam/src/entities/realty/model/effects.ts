import { createEffect, createEvent } from 'effector';
import {
  createRealty,
  fetchRealties,
  fetchRealty,
  generateRealtyDesc,
  updateRealty,
} from './api';

export const fetchRealtiesFx = createEffect(fetchRealties);
export const createRealtyFx = createEffect(createRealty);
export const updateRealtyFx = createEffect(updateRealty);
export const fetchRealtyFx = createEffect(fetchRealty);
export const generateRealtyDescFx = createEffect(generateRealtyDesc);

export const resetRealtyEv = createEvent();
