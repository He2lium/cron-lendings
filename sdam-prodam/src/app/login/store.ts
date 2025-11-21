import { create } from 'zustand';

export const useStepStore = create<{
  step: number;
  setStep: (step: number) => void;
}>()((set) => ({
  step: 0,
  setStep: (step: number) => set(() => ({ step })),
}));

export type Mode = 'tg' | 'qr' | 'code' | 'number';

export const useModeStore = create<{
  mode: Mode;
  setMode: (mode: Mode) => void;
}>()((set) => ({
  mode: 'tg',
  setMode: (mode: Mode) => set(() => ({ mode })),
}));
