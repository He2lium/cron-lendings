'use client';
import { fetchRealties } from '@/entities/realty/model/api';
import { Realty } from '@/shared/ui/Realty/Realty';
import { Stack, Text } from '@mantine/core';
import { useEffect } from 'react';
import { Filters } from './_components/Filters/Filters';
import { Stat } from './_components/Stat/Stat';

export default function AccountPage() {
  useEffect(() => {
    fetchRealties({
      pathParams: {
        realtyType: 'commercial',
      },
    });
  }, []);

  return (
    <Stack gap={20}>
      <Text fz={'2.2rem'}>Ваши объявления</Text>
      <Stat
        stats={[
          {
            type: 'views',
            count: 100,
          },
          {
            type: 'calls',
            count: 100,
          },
          {
            type: 'messages',
            count: 100,
          },
        ]}
      />
      <Filters />
      <Realty />
      <Realty />
      <Realty />
    </Stack>
  );
}
