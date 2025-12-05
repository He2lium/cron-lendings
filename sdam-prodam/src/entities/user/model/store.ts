import { createStore } from 'effector';
import { authByTokenFx, getAuthUserFx } from './effects';
import { User } from './types';

export const $authStore = createStore<User | null>(null);

$authStore
  .on(getAuthUserFx.doneData, (_, data: any) => data)
  .on(authByTokenFx.doneData, (_, data: any) => data);
