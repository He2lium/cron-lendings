import { rubikSansLight } from '@/shared/consts/fonts';
import { Map } from '@/shared/ui/map/Map';
import { Box, Button, Container, Group, SimpleGrid, Stack, Text } from '@mantine/core';

export default function RealtyView() {
  const geo = {
    center: [55.76, 37.64],
    zoom: 15,
  };

  return (
    <Box mt={'2rem'} mb={'2rem'}>
      <Container size={1200}>
        <Group align='stretch' gap={'3rem'}>
          <Stack w={'50%'}>
            <Text fz={'2.2rem'}>4-к. квартира, 112,6 м², 3/4 эт.</Text>
            <Text fz={'1.2rem'} fw={700}>
              О квартире
            </Text>
            <SimpleGrid cols={2} spacing={'4rem'} verticalSpacing={'0.5rem'}>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className}>Количество комнат:</Text>
                <Text>4</Text>
              </Group>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className}>Тип комнат:</Text>
                <Text>изолированные</Text>
              </Group>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className}>Общая площадь:</Text>
                <Text>112.6 м²</Text>
              </Group>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className}>Ремонт:</Text>
                <Text>требует ремонта</Text>
              </Group>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className}>Площадь кухни:</Text>
                <Text>16 м²</Text>
              </Group>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className}>Способ продажи:</Text>
                <Text>свободная</Text>
              </Group>
              <Group justify='space-between'>
                <Text className={rubikSansLight.className}>Этаж:</Text>
                <Text>3 из 4</Text>
              </Group>
            </SimpleGrid>
            <Text fz={'1.2rem'} fw={700} mt={'2rem'}>
              Расположение
            </Text>
            <Text className={rubikSansLight.className}>
              Москва, Вознесенский пер., 11с3
            </Text>
            <Map {...geo} />
            <Text fz={'1.2rem'} fw={700} mt={'2rem'}>
              Описание
            </Text>
            <Text className={rubikSansLight.className}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
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
            <Stack mt={'auto'} gap={'0.5rem'}>
              <Text fw={700} c='var(--mantine-primary-color-filled)'>
                Название продавца
              </Text>
              <Text>Агенство</Text>
              <Button radius={'lg'} fw={500} variant='light'>
                На страницу продавца
              </Button>
            </Stack>
          </Stack>
        </Group>
      </Container>
    </Box>
  );
}
