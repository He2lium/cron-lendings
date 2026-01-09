'use client';

import { getAuthUserFx } from '@/entities/user/model/effects';
import { $authStore } from '@/entities/user/model/store';
import { EventEmitter } from '@/shared/utils/eventEmitter';
import { useUnit } from 'effector-react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, authPending] = useUnit([$authStore, getAuthUserFx.pending]);
  const router = useRouter();

  useEffect(() => {
    EventEmitter.on('LOGOUT', () => {
      router.push('/login');
    });
  }, []);

  // useEffect(() => {
  //   if (!user && !authPending) {
  //     router.push('/login');
  //   }
  // }, [user]);

  return <>{!user ? null : children}</>;
};
