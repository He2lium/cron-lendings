'use client';
import { fetchRealtyFx, resetRealtyEv } from '@/entities/realty/model/effects';
import { $realty } from '@/entities/realty/model/store';
import { rubikSansLight } from '@/shared/consts/fonts';
import { TRANSLATES } from '@/shared/translates';
import { Map } from '@/shared/ui/map/Map';
import { Box, Button, Container, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import { useUnit } from 'effector-react';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { Banners } from './_components/Banners/Banners';
import { ImagesSlider } from './_components/ImagesSlider/ImagesSlider';

export default function RealtyView() {
  const realty = useUnit($realty);
  const { id } = useParams();
  const geo = {
    center: !realty ? [55.76, 37.64] : (realty.address.coordinates as any).coordinates,
    zoom: 15,
  };

  useEffect(() => {
    fetchRealtyFx({ pathParams: { id, realtyType: 'commercial' } });

    return () => {
      if (realty) {
        resetRealtyEv();
      }
    };
  }, []);

  if (!realty) {
    return null;
  }

  return (
    <Box mt={'2rem'} mb={'2rem'}>
      <Container size={1200}>
        <Group align='flex-start' gap={'2rem'}>
          <Stack w={'50%'}>
            <Text fz={'2.2rem'}>
              {TRANSLATES[realty.commercial_subtype]}, {realty.total_area} м²,{' '}
              {realty.address.floor}
              {realty.address.total_floors ? ` из ${realty.address.total_floors}` : ''}эт.
            </Text>
            <ImagesSlider images={realty._images} />
            <Text fz={'1.2rem'} fw={700}>
              О квартире
            </Text>
            <SimpleGrid cols={2} spacing={'4rem'} verticalSpacing={'0.5rem'}>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className} fw={300}>
                  Количество комнат:
                </Text>
                <Text>4</Text>
              </Group>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className} fw={300}>
                  Тип комнат:
                </Text>
                <Text>изолированные</Text>
              </Group>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className} fw={300}>
                  Общая площадь:
                </Text>
                <Text>{realty.total_area} м²</Text>
              </Group>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className} fw={300}>
                  Ремонт:
                </Text>
                <Text>требует ремонта</Text>
              </Group>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className} fw={300}>
                  Площадь кухни:
                </Text>
                <Text>16 м²</Text>
              </Group>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className} fw={300}>
                  Способ продажи:
                </Text>
                <Text>свободная</Text>
              </Group>
              {(realty.address.floor || realty.address.total_floors) && (
                <Group justify='space-between'>
                  <Text className={rubikSansLight.className} fw={300}>
                    Этаж:
                  </Text>
                  <Text>
                    {realty.address.floor}
                    {realty.address.total_floors
                      ? ` из ${realty.address.total_floors}`
                      : ''}
                  </Text>
                </Group>
              )}
            </SimpleGrid>
            <Text fz={'1.2rem'} fw={700} mt={'2rem'}>
              Расположение
            </Text>
            <Text className={rubikSansLight.className} fw={300}>
              {realty.address.city},{realty.address.street},{realty.address.building}
            </Text>
            <Map {...geo} />
            <Text fz={'1.2rem'} fw={700} mt={'2rem'}>
              Описание
            </Text>
            <Text className={rubikSansLight.className} fw={300}>
              {realty.description}
            </Text>
          </Stack>
          <Stack>
            <Text fz={'2.2rem'}>185 000 000 ₽</Text>
            <Button radius={'lg'} fw={500} color='green'>
              Показать телефон
            </Button>
            <Button radius={'lg'} fw={500}>
              Написать сообщение
            </Button>
            <Stack mt={'3rem'} gap={'0.5rem'}>
              <Text fw={700} c='var(--mantine-primary-color-filled)'>
                Название продавца
              </Text>
              <Text>Агенство</Text>
              <Button radius={'lg'} fw={500} variant='light'>
                На страницу продавца
              </Button>
            </Stack>
          </Stack>
          <Banners />
        </Group>
      </Container>
    </Box>
  );
}
