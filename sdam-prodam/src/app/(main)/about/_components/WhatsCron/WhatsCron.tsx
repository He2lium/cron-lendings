import { Box, Container, Flex, Paper, Text } from '@mantine/core';
import { IconFileCheck, IconUserHeart, IconUsers } from '@tabler/icons-react';
import styles from './styles.module.scss';

export const WhatsCron = () => (
  <Box bg='#fbfbfb'>
    <Container size={1200} className={styles.wrap}>
      <Text fz={'3.5rem'} fw={700}>
        Что такое ЦРОН?
      </Text>
      <Text c={'rgba(0,0,0,0.5)'}>
        ЦРОН — это офлайн-пространства для безопасных сделок с недвижимостью. В каждом
        центре есть:
      </Text>
      <Flex justify='space-between' className={styles.items}>
        <div>
          <Paper radius='lg' className={styles.num}>
            <IconUsers width={50} height={50} stroke={1} />
          </Paper>
          <Text className={styles.text}>
            Переговорные комнаты и юридическая поддержка
          </Text>
          <Text c={'rgba(0,0,0,0.5)'}>
            Всё для комфортного общения и уверенности в деталях
          </Text>
        </div>
        <div>
          <Paper
            radius='lg'
            className={styles.num}
            bg='var(--mantine-primary-color-filled)'
          >
            <IconFileCheck width={50} height={50} stroke={1} color='#fff' />
          </Paper>
          <Text className={styles.text}>
            Возможность зарегистрировать сделку на месте
          </Text>
          <Text c={'rgba(0,0,0,0.5)'}>Провели переговоры — сразу оформили сделку</Text>
        </div>
        <div>
          <Paper radius='lg' className={styles.num}>
            <IconUserHeart width={50} height={50} stroke={1} />
          </Paper>
          <Text className={styles.text}>Рабочие места и сервисы для риэлторов</Text>
          <Text c={'rgba(0,0,0,0.5)'}>Полноценный офис для вашей работы с клиентами</Text>
        </div>
      </Flex>
    </Container>
  </Box>
);
