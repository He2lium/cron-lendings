import { BaseListResponse, InterestPoint } from '@/shared/types';
import { createStore } from 'effector';
import { getInterestPointsFx } from './effects';

export const $interestPoints = createStore<BaseListResponse<InterestPoint> | null>(null);

$interestPoints.on(getInterestPointsFx.doneData, (_, data) => data);
