import { Container } from '@/shared/ui';
import { Flex, Text } from '@mantine/core';
import {
  IconBuildings,
  IconCoffee,
  IconHeart,
  IconUsersGroup,
  IconUserStar,
} from '@tabler/icons-react';
import styles from './styles.module.scss';

export const Counters = () => (
  <Container>
    <Flex className={styles.items}>
      <Flex justify='space-between'>
        <Text fz={80} lh={1} fw={700}>
          1000+
        </Text>
        <Text fw={700}>Довольных клиентов</Text>
        <IconUsersGroup
          width={44}
          height={44}
          strokeWidth={1}
          color='var(--mantine-primary-color-filled)'
        />
      </Flex>
      <Flex justify='space-between'>
        <Text fz={80} lh={1} fw={700}>
          9 из 10
        </Text>
        <Text fw={700}>Сделок проходят за один визит в офис</Text>
        <IconHeart
          width={44}
          height={44}
          strokeWidth={1}
          color='var(--mantine-primary-color-filled)'
        />
      </Flex>
      <Flex justify='space-between'>
        <Text fz={80} lh={1} fw={700}>
          98%
        </Text>
        <Text fw={700}>Положительных отзывов</Text>
        <IconUserStar
          width={44}
          height={44}
          strokeWidth={1}
          color='var(--mantine-primary-color-filled)'
        />
      </Flex>
      <Flex justify='space-between'>
        <Text fz={80} lh={1} fw={700}>
          984
        </Text>
        <Text fw={700}>Объекта недвижимости проверено</Text>
        <IconBuildings
          width={44}
          height={44}
          strokeWidth={1}
          color='var(--mantine-primary-color-filled)'
        />
      </Flex>
      <Flex justify='space-between'>
        <Text fz={80} lh={1} fw={700}>
          1 347
        </Text>
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
);
