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
    if (!authPending && !user) {
      getAuthUserFx();
    }

    EventEmitter.on('LOGOUT', () => {
      router.push('/login');
    });
  }, []);

  if (authPending) {
    return <div>'Loading'</div>;
  }

  return <>{authPending || !user ? null : children}</>;
};
