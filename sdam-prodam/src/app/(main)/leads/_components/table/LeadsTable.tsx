import { getLeadsFx } from '@/entities/lead/model/effects';
import { $leads } from '@/entities/lead/model/store';
import { Box, Group, Stack, Text } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';

export const LeadsTable = () => {
  const leads = useUnit($leads);

  useEffect(() => {
    getLeadsFx();
  }, []);

  return (
    <Stack>
      <Group>
        <Text flex={1} c='rgba(174, 174, 178, 1)' fz={'0.9rem'}>
          Имя
        </Text>
        <Text flex={1} c='rgba(174, 174, 178, 1)' fz={'0.9rem'}>
          Город
        </Text>
        <Text flex={1} c='rgba(174, 174, 178, 1)' fz={'0.9rem'}>
          Точка интереса
        </Text>
        <Text flex={1} c='rgba(174, 174, 178, 1)' fz={'0.9rem'}>
          Контакт
        </Text>
      </Group>
      <Stack gap={'0.5rem'}>
        {leads?.data.map((lead) => (
          <Box bg='rgba(251, 251, 251, 1)' p='0.75rem' bdrs={'1rem'} key={lead._id}>
            <Group>
              <Text flex={1} fz={'0.9rem'}>
                -
              </Text>
              <Text flex={1} fz={'0.9rem'}>
                {lead._interest_point?.address.city || '-'}
              </Text>
              <Text flex={1} fz={'0.9rem'}>
                {lead._interest_point?.title || '-'}
              </Text>
              <Text flex={1} fz={'0.9rem'}>
                {/* +7 9** *** **40{' '} */}
                <IconEye stroke={1} style={{ verticalAlign: 'middle' }} />{' '}
              </Text>
            </Group>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
