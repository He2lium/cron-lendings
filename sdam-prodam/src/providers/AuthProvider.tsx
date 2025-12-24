'use client';

import { $authStore } from '@/entities/user/model/store';
import { EventEmitter } from '@/shared/utils/eventEmitter';
import { useUnit } from 'effector-react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const user = useUnit($authStore);
  const router = useRouter();

  useEffect(() => {
    EventEmitter.on('LOGOUT', () => {
      router.push('/login');
    });
  }, []);

  return <>{!user ? null : children}</>;
};
