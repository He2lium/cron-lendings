'use client';

import { getAuthUserFx } from '@/entities/user/model/effects';
import { $authStore } from '@/entities/user/model/store';
import { useUnit } from 'effector-react';
import { ReactNode, useEffect } from 'react';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, authPending] = useUnit([$authStore, getAuthUserFx.pending]);

  useEffect(() => {
    if (!user && !authPending) {
      getAuthUserFx();
    }
  }, [user]);

  return <>{children}</>;
};
