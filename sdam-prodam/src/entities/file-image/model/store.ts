import { BaseListResponse } from '@/shared/types';
import { createStore } from 'effector';
import { getImagesFx } from './effects';
import { Image } from './types';

export const $iamges = createStore<BaseListResponse<Image> | null>(null);

$iamges.on(getImagesFx.doneData, (_, data) => data);
