import { Box, Button, Container, Paper, Text } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import styles from './styles.module.scss';

export const BottomBanner = () => (
  <Box mt={'5rem'} pb={'5rem'}>
    <Container size={1200}>
      <Paper radius='lg' className={styles.banner} p='xl'>
        <Text fz={40} fw={700} lh={1} c='#fff' w={'50%'}>
          <span className={styles.iconHeart}>
            <IconHeartFilled width={18} color='var(--mantine-primary-color-filled)' />
          </span>{' '}
          Безопасные <br /> и{' '}
          {/* <span className={styles.iconRocket}>
            <IconRocket width={18} stroke={1} />{' '}
          </span> */}
          быстрые сделки с недвижимостью
        </Text>
        <Text c='#fff' mt={'2rem'}>
          Проведите сделку без рисков и головной боли <br /> в Центре Реализации Объектов
          Недвижимости
        </Text>
        <Button variant='white' radius='xl' fw={400} size='lg'>
          Забранировать встречу
        </Button>
      </Paper>
    </Container>
  </Box>
);
