import { Button, Stack, Text } from '@mantine/core';
import styles from './styles.module.scss';

export const Banners = () => (
  <Stack flex={1} h='max-content'>
    <Stack className={styles.banner}>
      <Text fz={'1.3rem'} lh={'1.3rem'}>
        Вся вторичка в одном месте
      </Text>
      <Button>Смотреть</Button>
    </Stack>
    <Stack className={styles.banner}>
      <Text fz={'1.3rem'} lh={'1.3rem'}>
        Вся вторичка в одном месте
      </Text>
      <Button>Смотреть</Button>
    </Stack>
  </Stack>
);
