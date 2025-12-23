'use client';

import { useWebSocket } from '@/shared/hooks/useWebSocket';

export const EventsProvider = () => {
  useWebSocket();

  return null;
};
