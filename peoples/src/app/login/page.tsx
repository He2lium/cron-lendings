'use client';

import { EventsProvider } from '@/providers/EventsProvider';
import { Box } from '@mantine/core';
import { LoginQR } from './_components/LoginQR/LoginQR';
import { LoginTG } from './_components/LoginTG/LoginTG';
import { useModeStore } from './store';

export default function LoginPage() {
  const { mode } = useModeStore();

  return (
    <Box bg='rgba(245, 245, 248, 1)' h='100vh'>
      {mode === 'qr' ? <LoginQR /> : <LoginTG />}
      <EventsProvider />
    </Box>
  );
}
