import { createEffect } from 'effector';
import { authByToken, getAuthUser } from './api';

export const authByTokenFx = createEffect(authByToken);
export const getAuthUserFx = createEffect(getAuthUser);
