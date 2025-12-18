'use client';
import { fetchRealtiesFx } from '@/entities/realty/model/effects';
import { $realties } from '@/entities/realty/model/store';
import { Realty } from '@/shared/ui/Realty/Realty';
import { Stack, Text } from '@mantine/core';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { Filters } from './_components/Filters/Filters';
import { Stat } from './_components/Stat/Stat';

export default function AccountPage() {
  const realties = useUnit($realties);

  useEffect(() => {
    fetchRealtiesFx({
      pathParams: {
        realtyType: 'commercial',
      },
    });
  }, []);

  return (
    <Stack gap={20} mb='5rem'>
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
      {realties?.data.map((realty) => (
        <Realty key={realty._id} data={realty} />
      ))}
    </Stack>
  );
}
