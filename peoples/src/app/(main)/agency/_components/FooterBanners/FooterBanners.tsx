'use cilent';

import { Box, Button, Container, Group, Paper, Text } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import styles from './styles.module.scss';

export const FooterBanners = () => (
  <Box pb='7rem'>
    <Container size={1200}>
      <Paper radius='lg' className={styles.banner} p='xl'>
        <Text fz={40} fw={700} lh={1} c='#fff' w={'50%'}>
          Коворкинг и сервисы, которые закрывают рутину и усиливают ваш доход
        </Text>
        <Text c='#fff' mt={'2rem'}>
          Выберите удобное рабочее место
        </Text>
        <Group mt='auto' gap={20}>
          <Button variant='white' radius='xl' fw={400} size='lg'>
            Забранировать офис
          </Button>
          <Button
            radius='xl'
            fw={400}
            size='lg'
            bg={'rgba(255, 255, 255, 0.15)'}
            rightSection={<IconArrowUpRight stroke={1} />}
          >
            Офис ЦРОН на карте
          </Button>
        </Group>
      </Paper>
      <Paper radius='lg' className={styles.banner2} p='xl'>
        <Text fz={40} fw={700} lh={1}>
          Подписка СП Про - все, <br /> что нужно агенту
        </Text>
        <Text mt={22}>
          Рабочее место, CRM, юрист, ипотека <br />и поток клиентов - по одной подписке
        </Text>
        <Box mt='auto' className={styles.bannerButtons}>
          <Button radius='xl' fw={400} size='lg' mr={10}>
            Получить СП Про
          </Button>
        </Box>
      </Paper>
    </Container>
  </Box>
);
