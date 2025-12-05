import { createStore } from 'effector';
import { generateRealtyDescFx } from './effects';

export const $genereatedResponse = createStore('');

$genereatedResponse.on(
  generateRealtyDescFx.doneData,
  (_, data: any) => data?.description
);
