import { Highlight, Text } from '@mantine/core';

export const BookSuccess = () => (
  <div>
    <Text fw={700} fz={40} lh={1}>
      Встреча запланирована
    </Text>
    <Text className='mt-10'>
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
    </Text>
  </div>
);
