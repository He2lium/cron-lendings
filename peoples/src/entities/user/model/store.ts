import { create } from 'zustand';
import { User } from './types';

export const useAuthStore = create<{
  data: User | null;
  setData: (user: User) => void;
}>()((set) => ({
  data: null,
  setData: (data: User) => set(() => ({ data })),
}));
