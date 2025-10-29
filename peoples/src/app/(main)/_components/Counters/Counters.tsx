import { Box, Container, Flex, Text } from '@mantine/core';
import {
  IconBuildings,
  IconCoffee,
  IconHeart,
  IconUsersGroup,
  IconUserStar,
} from '@tabler/icons-react';
import styles from './styles.module.scss';

export const Counters = () => (
  <Box>
    <Container size={1200}>
      <Flex className={styles.items}>
        <Flex justify='space-between'>
          <Text className={styles.count}>1000+</Text>
          <Text fw={700}>Довольных клиентов</Text>
          <IconUsersGroup
            width={44}
            height={44}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
        </Flex>
        <Flex justify='space-between'>
          <Text className={styles.count}>9 из 10</Text>
          <Text fw={700}>Сделок проходят за один визит в офис</Text>
          <IconHeart
            width={44}
            height={44}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
        </Flex>
        <Flex justify='space-between'>
          <Text className={styles.count}>98%</Text>
          <Text fw={700}>Положительных отзывов</Text>
          <IconUserStar
            width={44}
            height={44}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
        </Flex>
        <Flex justify='space-between'>
          <Text className={styles.count}>984</Text>
          <Text fw={700}>Объекта недвижимости проверено</Text>
          <IconBuildings
            width={44}
            height={44}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
        </Flex>
        <Flex justify='space-between'>
          <Text className={styles.count}>1 347</Text>
          <Text fw={700}>Чашек кофе приготовлено клиентам</Text>
          <IconCoffee
            width={44}
            height={44}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
        </Flex>
      </Flex>
    </Container>
  </Box>
);
