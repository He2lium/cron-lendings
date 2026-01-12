'use client';
import { getAuthUserFx } from '@/entities/user/model/effects';
import { $authStore } from '@/entities/user/model/store';
import { Center, Loader } from '@mantine/core';
import { useUnit } from 'effector-react';
import { ReactNode, useEffect } from 'react';

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [user, authPending] = useUnit([$authStore, getAuthUserFx.pending]);

  useEffect(() => {
    if (!authPending && !user) {
      getAuthUserFx();
    }
  }, []);

  if (authPending) {
    return (
      <Center h={'80vh'}>
        <Loader color='blue' type='bars' />
      </Center>
    );
  }

  return <>{children}</>;
};
