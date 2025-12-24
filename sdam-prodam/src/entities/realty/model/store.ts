import { BaseListResponse } from '@/shared/types';
import { createStore } from 'effector';
import {
  fetchRealtiesFx,
  fetchRealtyFx,
  generateRealtyDescFx,
  resetRealtyEv,
} from './effects';
import { RealtyCommercial } from './types';

export const $realties = createStore<BaseListResponse<RealtyCommercial> | null>(null);
export const $realty = createStore<RealtyCommercial | null>(null);
export const $genereatedResponse = createStore('');

$realties.on(fetchRealtiesFx.doneData, (_, data) => data);
$realty.on(fetchRealtyFx.doneData, (_, data) => data).reset(resetRealtyEv);

$genereatedResponse.on(
  generateRealtyDescFx.doneData,
  (_, data: any) => data?.description
);
