'use client';
import { $authStore } from '@/entities/user/model/store';
import { useUnit } from 'effector-react';
import { AuthedHeader } from './components/AuthedHeader/AuthedHeader';
import { NotAuthedHeader } from './components/NotAuthedHeader/NotAuthedHeader';

export const Header = () => {
  const user = useUnit($authStore);

  return <>{user ? <AuthedHeader /> : <NotAuthedHeader />}</>;
};
