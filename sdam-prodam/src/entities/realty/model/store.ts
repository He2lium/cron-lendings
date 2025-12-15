import { BaseListResponse } from '@/shared/types';
import { createStore } from 'effector';
import { fetchRealtiesFx, generateRealtyDescFx } from './effects';
import { RealtyCommercial } from './types';

export const $realties = createStore<BaseListResponse<RealtyCommercial> | null>(null);
export const $genereatedResponse = createStore('');

$realties.on(fetchRealtiesFx.doneData, (_, data) => data);

$genereatedResponse.on(
  generateRealtyDescFx.doneData,
  (_, data: any) => data?.description
);
