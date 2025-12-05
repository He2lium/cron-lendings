'use cilent';

import { Button, Container, SimpleGrid, Text, Title } from '@mantine/core';
import styles from './styles.module.scss';

export const Safety = () => (
  <Container size={1200} pt={100}>
    <Title size='h2' order={2}>
      Для кого это все
    </Title>
    <SimpleGrid cols={{ xs: 2, sm: 2, md: 3, lg: 3, xl: 3 }} className={styles.items}>
      <div>
        <Title size='h3' order={3} mb='1rem'>
          Продавцам
        </Title>
        <Text>
          Размещение объявлений бесплатно, заявки от реальных покупателей без лишних
          звонков
        </Text>
      </div>
      <div>
        <Title size='h3' order={3} mb='1rem'>
          Покупателям
        </Title>
        <Text>
          Удобно искать и покупать жильё без посредников или с помощью проверенных агентов
        </Text>
      </div>
      <div>
        <Title size='h3' order={3} mb='1rem'>
          Арендаторам
        </Title>
        <Text>Простой и быстрый поиск жилья на любой срок и бюджет</Text>
      </div>
      <div>
        <Title size='h3' order={3} mb='1rem'>
          Арендодателям
        </Title>
        <Text>Быстрая публикация, удобная коммуникация с потенциальными жильцами</Text>
      </div>
      <div>
        <Title size='h3' order={3} mb='1rem'>
          Риэлторам
        </Title>
        <Text>
          Рабочие места в ЦРОН, доступ к сервисам для сделок и взаимодействия с клиентами
        </Text>
      </div>
      <div>
        <Title size='h3' order={3} mb='1rem'>
          Новичкам на рынке
        </Title>
        <Text>Понятный интерфейс, подсказки и поддержка на всех этапах</Text>
        <Button variant='white' radius='xl' size='lg' fw={400}>
          Разместить объявление
        </Button>
      </div>
    </SimpleGrid>
  </Container>
);
