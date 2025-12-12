import { createEffect } from 'effector';
import { authByToken, getAuthUser, logout } from './api';

export const authByTokenFx = createEffect(authByToken);
export const getAuthUserFx = createEffect(getAuthUser);
export const logoutUserFx = createEffect(logout);
