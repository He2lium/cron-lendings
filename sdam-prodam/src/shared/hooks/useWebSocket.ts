import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import io, { Socket } from 'socket.io-client';
import { create } from 'zustand';
import { api } from '../services/api/api';

export const useWSStore = create<{
  socket: Socket | null;
  setSocket: (socket: Socket) => void;
}>()((set) => ({
  socket: null,
  setSocket: (socket: Socket) => set(() => ({ socket })),
}));

export const useWebSocket = () => {
  const { socket, setSocket } = useWSStore();
  const r = useRouter();

  useEffect(() => {
    if (!socket) {
      const socketInstance = io(`${process.env.NEXT_PUBLIC_API_PATH}/ws`, {
        transports: ['websocket'],
        upgrade: false,
        reconnectionAttempts: 3,
        reconnectionDelay: 1000,
        //   query: {
        //     uid: user.id,
        //   },
      });

      socketInstance.on('connect', () => {
        console.log('connected');
      });

      socketInstance.on('disconnect', () => {
        console.log('disconnected');
      });

      socketInstance.on('auth_token', async (token: string) => {
        // const params = {
        //   method: 'post',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json',
        //   },
        //   body: JSON.stringify({ token }),
        // };

        await api.post(`/proxy/auth/by-token`, { json: { token } });

        r.push('/');
      });
      setSocket(socketInstance);
    }
  }, []);

  return socket;
};
