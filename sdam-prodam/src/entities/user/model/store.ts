import { createStore, sample } from 'effector';
import { authByTokenFx, getAuthUserFx, logoutUserFx } from './effects';
import { logoutEv } from './events';
import { User } from './types';

export const $authStore = createStore<User | null>(null);

$authStore
  .on([getAuthUserFx.doneData, authByTokenFx.doneData], (_, data: any) => data)
  .reset(logoutEv);

sample({
  clock: logoutEv,
  target: logoutUserFx,
});
