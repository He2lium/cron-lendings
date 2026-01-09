import { createEffect } from 'effector';
import { createLead, deleteLead, getLead, getLeads } from './api';
import { Lead } from './types';

export const getLeadsFx = createEffect(getLeads);
export const getLeadFx = createEffect<any, Lead, Error>(getLead);
export const createLeadFx = createEffect(createLead);
export const deleteLeadFx = createEffect(deleteLead);
