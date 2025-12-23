import { Container, Flex, Paper, SimpleGrid, Text, Title } from '@mantine/core';
// import styles from './styles.module.scss';
import {
  IconBadgeTm,
  IconCashRegister,
  IconCoins,
  IconUsersGroup,
} from '@tabler/icons-react';

export const TitleBanner = () => (
  <Container size={1200} className='text-center'>
    <Title mt={'11vw'}>Бизнес в недвижимости с поддержкой головной компании</Title>
    <div className='mt-10'>
      <Text>Запусти свой ЦРОН — получи 1 000 000 ₽ субсидии, сервисную</Text>
      <Text>платформу и клиентов с первого дня</Text>
    </div>
    <SimpleGrid cols={{ xl: 4, lg: 4, md: 4, base: 2 }} mt={80}>
      <Paper p='1.5rem' radius='lg' bg='#F7F9FB'>
        <Flex gap={32} style={{ alignItems: 'center' }}>
          <IconCoins
            width={46}
            height={46}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
          <Text ta='left'>1 млн ₽ на запуск</Text>
        </Flex>
      </Paper>
      <Paper p='1.5rem' radius='lg' bg='#F7F9FB'>
        <Flex gap={32} style={{ alignItems: 'center' }}>
          <IconUsersGroup
            width={42}
            height={42}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
          <Text ta='left'>Клиенты с первого дня</Text>
        </Flex>
      </Paper>
      <Paper p='1.5rem' radius='lg' bg='#F7F9FB'>
        <Flex gap={32} style={{ alignItems: 'center' }}>
          <IconBadgeTm
            width={44}
            height={44}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
          <Text ta='left'>Сильный бренд и поддержка</Text>
        </Flex>
      </Paper>
      <Paper p='1.5rem' radius='lg' bg='#F7F9FB'>
        <Flex gap={32} style={{ alignItems: 'center' }}>
          <IconCashRegister
            width={44}
            height={44}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
          <Text ta='left'>Доход с подписок и сделок</Text>
        </Flex>
      </Paper>
    </SimpleGrid>
  </Container>
);
