import logo from '@/shared/images/sdamprodam_logo.png';
import { Box, Image, Paper } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import NextImage from 'next/image';
import { ReactNode } from 'react';
import { useModeStore } from '../../store';
import styles from './styles.module.scss';

export const Wrap = ({ children }: { children: ReactNode }) => {
  const { setMode } = useModeStore();

  return (
    <Box className={styles.wrap}>
      <Paper radius='lg' className={styles.card}>
        <div className={styles.header}>
          <IconArrowLeft color='rgba(153, 153, 153, 1)' onClick={() => setMode('tg')} />
          <Image
            component={NextImage}
            src={logo}
            alt=''
            w={113}
            style={{ objectFit: 'contain' }}
          />
          <div />
        </div>
        {children}
      </Paper>
    </Box>
  );
};
