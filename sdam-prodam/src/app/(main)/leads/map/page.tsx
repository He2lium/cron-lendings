'use client';
import {
  getInterestPointsByPoligonFx,
  getInterestPointsFx,
} from '@/entities/interest-point/model/effects';
import { $interestPoints } from '@/entities/interest-point/model/store';
import { Map } from '@/shared/ui/map/Map';
import { MainSidebar } from '@/widgets/main-sidebar/MainSidebar';
import { Box, Container, Group, Stack } from '@mantine/core';
import { IconMapPin, IconUsers, IconUsersGroup } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { LeadsMapFilter } from './_components/filter/LeadsMapFilter';
import styles from './styles.module.scss';

export default function LeadsMapPage() {
  const ipoints = useUnit($interestPoints);

  useEffect(() => {
    getInterestPointsFx();
  }, []);

  const points =
    ipoints?.data.map((point) => ({
      key: point._id,
      geometry: point.address.coordinates.coordinates,
      properties: {
        balloonContent: `<div class="driver-card">${point.title} <br /> <strong>${point.leadsCount} лидов</strong></div>`,
      },
      originalObj: point,
    })) || [];

  const handleBoundsChange = (e: any) => {
    const coordinates = e.originalEvent.newBounds;

    getInterestPointsByPoligonFx({
      type: 'Polygon',
      coordinates: [coordinates[1], coordinates[0]],
    });
  };

  return (
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
              },
              {
                href: '/leads/map',
                label: 'Точки интереса на карте',
                leftSection: <IconMapPin stroke={1} />,
                active: true,
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
              <LeadsMapFilter />
              <div className={styles.mapWrap}>
                <Map
                  height={700}
                  defaultState={{
                    center: [55.76, 37.64],
                    zoom: 3,
                  }}
                  points={points}
                  onBoundsChange={handleBoundsChange}
                />
                {/* <MapLeads /> */}
              </div>
            </Stack>
          </Box>
        </Group>
      </Container>
    </Box>
  );
}
