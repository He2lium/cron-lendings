import { createEffect } from 'effector';
import { createRealty, fetchRealties, generateRealtyDesc } from './api';

export const fetchRealtiesFx = createEffect(fetchRealties);
export const createRealtyFx = createEffect(createRealty);
export const generateRealtyDescFx = createEffect(generateRealtyDesc);
