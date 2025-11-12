'use cilent';

import { Box, Button, Container, SimpleGrid, Text, Title } from '@mantine/core';
import styles from './styles.module.scss';

export const Safety = () => (
  <Box bg='#fbfbfb'>
    <Container size={1200} pt={100}>
      <Title size='h2' order={2}>
        Вы - специалист. ЦРОН делает остальное
      </Title>
      <SimpleGrid cols={{ xs: 2, sm: 2, md: 3, lg: 3, xl: 3 }} className={styles.items}>
        <div>
          <Title size='h3' order={3} mb='1rem'>
            Готовое рабочее место и переговорные
          </Title>
          <Text>
            Современный офис, где можно работать, встречаться с клиентами и чувствовать
            себя уверенно
          </Text>
        </div>
        <div>
          <Title size='h3' order={3} mb='1rem'>
            CRM и подписка <br /> "СП Про"
          </Title>
          <Text>
            Вся клиентская база, статусы сделок, напоминания и документы - в одном окне
          </Text>
        </div>
        <div>
          <Title size='h3' order={3} mb='1rem'>
            Поток входящих клиентов и объекты
          </Title>
          <Text>Доступ к платформе "СдамПродам" - уже с объявлениями и трафиком</Text>
        </div>
        <div>
          <Title size='h3' order={3} mb='1rem'>
            Маркетинг и обучение от головной компании
          </Title>
          <Text>
            Продвижение ваших объектов, личный бренд, разбор кейсов и практическое
            обучение
          </Text>
        </div>
        <div>
          <Title size='h3' order={3} mb='1rem'>
            Юридическая и ипотечная поддержка
          </Title>
          <Text>
            Специалисты проверят объекты, подготовят договоры и подадут заявки в банки
          </Text>
        </div>
        <div>
          <Title size='h3' order={3} mb='1rem'>
            Комьюнити <br /> и поддержка
          </Title>
          <Text>
            Вы не один - вокруг вас опытные коллеги, с кем можно обсудить сделки, наладить
            партнёрство и расти быстрее
          </Text>
          <Button radius='xl' size='lg' fw={400}>
            Запланировать офис
          </Button>
        </div>
      </SimpleGrid>
    </Container>
  </Box>
);
