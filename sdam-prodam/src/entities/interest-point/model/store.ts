import { BaseListResponse } from '@/shared/types';
import { createStore } from 'effector';
import { getInterestPointsByPoligonFx, getInterestPointsFx } from './effects';
import { InterestPoint } from './types';

export const $interestPoints = createStore<BaseListResponse<InterestPoint> | null>(null);

$interestPoints.on(
  [getInterestPointsFx.doneData, getInterestPointsByPoligonFx.doneData],
  (_, data) => data
);
