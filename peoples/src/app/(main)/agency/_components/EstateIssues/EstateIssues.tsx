'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconBuildingEstate,
  IconClockHour10,
  IconComponents,
  IconUserExclamation,
} from '@tabler/icons-react';
import styles from './styles.module.scss';

export const EstateIssues = () => {
  const isMobile = useMediaQuery('(max-width: 1199px');

  return (
    <Box pt='7rem' pb='7rem' mt='7rem'>
      <Container size={1200}>
        <Flex justify='space-between' direction={isMobile ? 'column' : 'row'} gap={40}>
          <Flex direction='column' className={styles.banner}>
            <Title size='h2' order={2}>
              Что мешает зарабатывать больше?
            </Title>
            <Text mt='2rem'>
              Сталкиваетесь с покупкой или продажей недвижимости в первый раз и
              переживаете?
            </Text>
            <Button radius='xl' fw={400} size='lg' mt='5rem'>
              Забронировать офис
            </Button>
          </Flex>
          <SimpleGrid cols={{ base: 2 }}>
            <Paper bg='#fbfbfb' radius='lg' p={20} className={styles.item}>
              <IconBuildingEstate width={44} height={44} stroke={1} color='#ffae00' />
              <Text fw='bold'>Нет нормального офиса для встреч с клиентами</Text>
            </Paper>
            <Paper bg='#fbfbfb' radius='lg' p={20} className={styles.item}>
              <IconClockHour10 width={44} height={44} stroke={1} color='#ffae00' />
              <Text fw='bold'>Много времени уходит на оформление и проверку</Text>
            </Paper>
            <Paper bg='#fbfbfb' radius='lg' p={20} className={styles.item}>
              <IconComponents width={44} height={44} stroke={1} color='#ffae00' />
              <Text fw='bold'>Хаос в сделках, потеря контактов</Text>
            </Paper>
            <Paper bg='#fbfbfb' radius='lg' p={20} className={styles.item}>
              <IconUserExclamation width={44} height={44} stroke={1} color='#ffae00' />
              <Text fw='bold'>Сложно работать в одиночку, особенно новичку</Text>
            </Paper>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};
