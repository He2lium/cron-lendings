import { BaseListResponse } from '@/shared/types';
import { createStore } from 'effector';
import { getLeadFx, getLeadsFx } from './effects';
import { Lead } from './types';

export const $leads = createStore<BaseListResponse<Lead> | null>(null);
export const $lead = createStore<Lead | null>(null);

$leads.on(getLeadsFx.doneData, (_, data) => data);

$lead.on(getLeadFx.doneData, (_, data: any) => data);
