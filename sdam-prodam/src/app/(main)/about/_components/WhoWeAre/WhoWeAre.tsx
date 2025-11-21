import { Box, Container, Flex, Paper, Text } from '@mantine/core';
import { IconChecks, IconListSearch, IconShield } from '@tabler/icons-react';
import styles from './styles.module.scss';

export const WhoWeAre = () => (
  <Box bg='#fbfbfb'>
    <Container size={1200} className={styles.wrap}>
      <Text fz={'3.5rem'} fw={700}>
        Кто мы такие
      </Text>
      <Text c={'rgba(0,0,0,0.5)'}>
        Цифровая платформа для покупки, продажи и аренды недвижимости. Здесь встречаются
        собственники, агенты и те, кто ищет свой будущий дом. Наша цель — упростить рынок
        недвижимости, сделать его прозрачным, удобным и безопасным.
      </Text>
      <Flex justify='space-between' className={styles.items}>
        <div>
          <Paper radius='lg' className={styles.num}>
            <IconListSearch width={50} height={50} stroke={1} />
          </Paper>
          <Text className={styles.text}>Всё в одном месте</Text>
          <Text>
            Квартиры, дома, коммерция, аренда — легко искать, просто фильтровать
          </Text>
        </div>
        <div>
          <Paper
            radius='lg'
            className={styles.num}
            bg='var(--mantine-primary-color-filled)'
          >
            <IconShield width={50} height={50} stroke={1} color='#fff' />
          </Paper>
          <Text className={styles.text}>Безопасные сделки с ЦРОН</Text>
          <Text>
            Мы создали ЦРОН — это безопасные офисы, где можно подписывать документы,
            проводить расчёты и консультироваться с юристами
          </Text>
        </div>
        <div>
          <Paper radius='lg' className={styles.num}>
            <IconChecks width={50} height={50} stroke={1} />
          </Paper>
          <Text className={styles.text}>Проверенные объявления</Text>
          <Text>
            Работаем с агентами и собственниками, регулярно модерируем и проверяем
            объявления
          </Text>
        </div>
      </Flex>
    </Container>
  </Box>
);
