import { Container } from '@/shared/ui';
import { Flex, Paper, Text, Title } from '@mantine/core';
import {
  IconBuildingEstate,
  IconChecklist,
  IconFileSearch,
  IconShield,
} from '@tabler/icons-react';
// import { IconCopy } from '@tabler/icons-react'
export const TitleBanner = () => (
  <Container className='text-center'>
    <Title style={{ marginTop: '10rem' }}>Ваш помощник в мире недвижимости</Title>
    <div className='mt-10'>
      <Text>
        ЦРОН - сервис и пространство, где вы легко решите любые вопросы с недвижимостью:
      </Text>
      <Text>купить, продать, арендовать - с поддержкой профи</Text>
    </div>
    <Flex justify='space-between' mt={80}>
      <Paper w='18rem' p='1.5rem' radius='lg' bg='#F7F9FB'>
        <Flex gap={32} style={{ alignItems: 'center' }}>
          <IconChecklist
            width={46}
            height={46}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
          <Text ta='left'>Юридическая поддержка</Text>
        </Flex>
      </Paper>
      <Paper w='18rem' p='1.5rem' radius='lg' bg='#F7F9FB'>
        <Flex gap={32} style={{ alignItems: 'center' }}>
          <IconFileSearch
            width={42}
            height={42}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
          <Text ta='left'>Проверка недвижимости</Text>
        </Flex>
      </Paper>
      <Paper w='18rem' p='1.5rem' radius='lg' bg='#F7F9FB'>
        <Flex gap={32} style={{ alignItems: 'center' }}>
          <IconBuildingEstate
            width={44}
            height={44}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
          <Text ta='left'>
            Современный <br /> офис
          </Text>
        </Flex>
      </Paper>
      <Paper w='18rem' p='1.5rem' radius='lg' bg='#F7F9FB'>
        <Flex gap={32} style={{ alignItems: 'center' }}>
          <IconShield
            width={44}
            height={44}
            strokeWidth={1}
            color='var(--mantine-primary-color-filled)'
          />
          <Text ta='left'>
            Безопасные <br /> сделки
          </Text>
        </Flex>
      </Paper>
    </Flex>
  </Container>
);
