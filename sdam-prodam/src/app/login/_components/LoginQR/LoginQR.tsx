import { useWebSocket } from '@/shared/hooks/useWebSocket';
import { Button, Text } from '@mantine/core';
import { IconBrandTelegram } from '@tabler/icons-react';
import { QRCodeCanvas } from 'qrcode.react';
import { Wrap } from '../Wrap/Wrap';
import styles from '../Wrap/styles.module.scss';

export const LoginQR = () => {
  const socket = useWebSocket();

  const LINK = `https://t.me/cron_sp_bot?start=auth=${socket?.id}`;

  return (
    <Wrap>
      <Text className={styles.title}>Отсканируйте QR-код</Text>
      <Text className={styles.desc}>Вы перейдете в Telegram-бота для авторизации</Text>
      {socket && (
        <>
          <QRCodeCanvas
            value={LINK}
            size={315}
            //   imageSettings={{
            //     width: 80,
            //     height: 80,
            //     src: IconBrandTelegram.toString(),
            //     excavate: true,
            //   }}
          />
          <Text className='text-center' mt={20} mb={20}>
            Или
          </Text>
          <Button
            variant='filled'
            color='rgba(245, 245, 248, 1)'
            c='#000'
            radius='xl'
            onClick={() => window.open(LINK, '__blank')}
            w={'100%'}
          >
            <IconBrandTelegram className='mr-2' /> Авторизация через Telegram
          </Button>
        </>
      )}
    </Wrap>
  );
};
