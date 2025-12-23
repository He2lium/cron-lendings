import { createEffect } from 'effector';
import { authByToken, getAuthUser, logout, updateUser } from './api';

export const authByTokenFx = createEffect(authByToken);
export const getAuthUserFx = createEffect(getAuthUser);
export const logoutUserFx = createEffect(logout);
export const updateUserFx = createEffect(updateUser);
