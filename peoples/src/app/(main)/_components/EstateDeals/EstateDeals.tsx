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
  IconClockHour10,
  IconEyeQuestion,
  IconHomeQuestion,
  IconPasswordUser,
} from '@tabler/icons-react';
import styles from './styles.module.scss';

export const EstateDeals = () => {
  const isMobile = useMediaQuery('(max-width: 1199px');

  return (
    <Box bg='#fbfbfb' pt='7rem' pb='7rem' mt='7rem'>
      <Container size={1200}>
        <Flex justify='space-between' direction={isMobile ? 'column' : 'row'} gap={40}>
          <Flex direction='column' className={styles.banner}>
            <Title size='h2' order={2}>
              Сделки с недвижимостью это сложно?
            </Title>
            <Text mt='2rem'>
              Сталкиваетесь с покупкой или продажей недвижимости в первый раз и
              переживаете?
            </Text>
            <Button radius='xl' fw={400} size='lg' mt='5rem'>
              Консультация
            </Button>
          </Flex>
          <SimpleGrid cols={{ base: 2 }}>
            <Paper radius='lg' p={20} className={styles.item}>
              <IconEyeQuestion width={44} height={44} stroke={1} color='#ffae00' />
              <Text fw='bold'>
                Не знаете, <br /> с чего начать?
              </Text>
            </Paper>
            <Paper radius='lg' p={20} className={styles.item}>
              <IconPasswordUser width={44} height={44} stroke={1} color='#ffae00' />
              <Text fw='bold'>
                Боитесь попасть <br />
                на мошенников?
              </Text>
            </Paper>
            <Paper radius='lg' p={20} className={styles.item}>
              <IconHomeQuestion width={44} height={44} stroke={1} color='#ffae00' />
              <Text fw='bold'>
                Не уверены в <br /> «чистоте» квартиры?
              </Text>
            </Paper>
            <Paper radius='lg' p={20} className={styles.item}>
              <IconClockHour10 width={44} height={44} stroke={1} color='#ffae00' />
              <Text fw='bold'>
                Столкнулись с бюрократией <br /> и задержками?
              </Text>
            </Paper>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};
