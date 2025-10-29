import { Button, Highlight, Stack, Text } from '@mantine/core';
import styles from './styles.module.scss';

export const BookSuccess = () => (
  <Stack justify='space-between' h='100%'>
    <div />
    <div>
      <Text fw={700} fz={40} lh={1}>
        Встреча запланирована
      </Text>
      <Text mt={30}>
        <Highlight
          highlight={['28.01.2025', '12:30']}
          highlightStyles={{
            background: 'none',
            color: 'var(--mantine-primary-color-filled)',
            fontWeight: 700,
          }}
        >
          Встреча запланирована на 28.01.2025 в 12:30, мы уведомим вас в СМС незадолго до
          встречи
        </Highlight>
        <Button radius='xl' fw={400} size='lg' mt='5rem'>
          Понятно
        </Button>
      </Text>
    </div>
    <div className={styles.banner}>
      <Text fz={24} fw={700} lh={1.2} mb={8}>
        Переходи на СП-ПРО
      </Text>
      <Text>Получи доступ к эксклюзивным функциям</Text>
      <Button variant='white' radius='xl' size='lg' fw={400}>
        Подробнее
      </Button>
    </div>
  </Stack>
);
