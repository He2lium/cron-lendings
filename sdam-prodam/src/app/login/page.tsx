'use client';

import { useWebSocket } from '@/shared/hooks/useWebSocket';
import { Box } from '@mantine/core';
import { LoginQR } from './_components/LoginQR/LoginQR';
import { LoginTG } from './_components/LoginTG/LoginTG';
import { useModeStore } from './store';

export default function LoginPage() {
  const { mode } = useModeStore();

  useWebSocket();

  return (
    <Box bg='rgba(245, 245, 248, 1)' h='100vh'>
      {mode === 'qr' ? <LoginQR /> : <LoginTG />}
    </Box>
  );
}
