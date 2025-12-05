import { Group, Paper, Stack, Text } from '@mantine/core';
import {
  IconBrandMessenger,
  IconEye,
  IconLogout,
  IconPhone,
  IconStar,
} from '@tabler/icons-react';
import { FC, ReactNode } from 'react';

type StatTypes = 'calls' | 'messages' | 'views' | 'reviews' | 'requests';

interface StatItem {
  type: StatTypes;
  count: number;
}

interface Props {
  stats: StatItem[];
}

const icons: Record<StatTypes, ReactNode> = {
  calls: <IconPhone stroke={1} size={24} color='var(--mantine-primary-color-filled)' />,
  messages: (
    <IconBrandMessenger
      stroke={1}
      size={24}
      color='var(--mantine-primary-color-filled)'
    />
  ),
  views: <IconEye stroke={1} size={24} color='var(--mantine-primary-color-filled)' />,
  reviews: <IconStar stroke={1} size={24} color='var(--mantine-primary-color-filled)' />,
  requests: (
    <IconLogout stroke={1} size={24} color='var(--mantine-primary-color-filled)' />
  ),
};

const labels: Record<StatTypes, string> = {
  calls: 'Звонков сегодня',
  messages: 'Сообщений сегодня',
  views: 'Просмотров сегодня',
  reviews: 'Отзывы сегодня',
  requests: 'Заявки сегодня',
};

export const Stat: FC<Props> = ({ stats }) => (
  <Group>
    {stats.map((item) => (
      <Paper key={item.type} bg='rgba(245, 245, 245, 1)' radius='lg' p='1rem'>
        <Group align='flex-start' gap={10}>
          {icons[item.type]}
          <Stack gap={5}>
            <Text c='rgba(192,192,192,1)'>{labels[item.type]}</Text>
            <Text fw={700}>{item.count}</Text>
          </Stack>
        </Group>
      </Paper>
    ))}
  </Group>
);
