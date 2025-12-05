'use client';
import { Tabs } from '@/shared/tabs/Tabs';
import { Stack } from '@mantine/core';

export const Filters = () => (
  <Stack gap={10}>
    <Tabs
      tabs={[
        { id: '1', label: 'Активные' },
        { id: '2', label: 'С ошибками' },
        { id: '3', label: 'Неопубликованные' },
        { id: '4', label: 'Архив' },
        { id: '5', label: 'Удаленные' },
        { id: '6', label: 'Черновики' },
      ]}
      onChange={() => {}}
      noContent
      bordered
    />
  </Stack>
);
