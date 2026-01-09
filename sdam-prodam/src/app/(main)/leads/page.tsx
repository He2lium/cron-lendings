'use client';
import { MainSidebar } from '@/widgets/main-sidebar/MainSidebar';
import { Box, Container, Group, Stack } from '@mantine/core';
import { IconMapPin, IconUsers, IconUsersGroup } from '@tabler/icons-react';
import { LeadsFilter } from './_components/filter/LeadsFilter';
import { LeadsTable } from './_components/table/LeadsTable';

export default function LeadsPage() {
  return (
    <>
      <Box mt={'2rem'} mb={'2rem'}>
        <Container size={1200}>
          <Group gap={'1.25rem'} justify='space-between' align='flex-start'>
            <MainSidebar
              title='Биржа лидов'
              links={[
                {
                  href: '/leads',
                  label: 'Все лиды',
                  leftSection: <IconUsers stroke={1} />,
                  active: true,
                },
                {
                  href: 'leads/map',
                  label: 'Точки интереса на карте',
                  leftSection: <IconMapPin stroke={1} />,
                },
                {
                  href: '#',
                  label: 'Мои лиды',
                  leftSection: <IconUsersGroup stroke={1} />,
                },
              ]}
            />
            <Box flex={1}>
              <Stack>
                <LeadsFilter />
                <LeadsTable />
              </Stack>
            </Box>
          </Group>
        </Container>
      </Box>
    </>
  );
}
