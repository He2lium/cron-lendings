import { Container } from '@/shared/ui';
import { Box, Button, Flex, Paper, Text } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import styles from './styles.module.scss';

export const HowItWorks = () => (
  <Box bg='#fbfbfb' pt='7rem' pb='7rem' mt='7rem'>
    <Container>
      <Text fz='3.7rem' fw='bold' lh={1.2} className='text-center'>
        Как это работает?
      </Text>
      <Text className='text-center' mt={20} c='rgba(0,0,0,.5)'>
        Три простых шага к сделке с недвижимостью
      </Text>
      <Flex justify='space-between' className={styles.items}>
        <div>
          <Paper radius='lg' className={styles.num}>
            01
          </Paper>
          <Text className={styles.text}>
            Вы приходите в ЦРОН или <br /> оставляете заявку
          </Text>
        </div>
        <div>
          <Paper radius='lg' className={styles.num}>
            02
          </Paper>
          <Text className={styles.text}>
            Вас консультирует <br /> эксперт - бесплатно
          </Text>
        </div>
        <div>
          <Paper radius='lg' className={styles.num}>
            03
          </Paper>
          <Text className={styles.text}>
            ЦРОН всё делает за вас - вы только <br /> подписываете бумаги
          </Text>
        </div>
      </Flex>
      <Paper radius='lg' className={styles.banner} p='xl'>
        <Text fz={40} fw={700} lh={1}>
          Запишитесь на бесплатную <br /> консультацию
        </Text>
        <Text mt={22}>
          Или просто приходите, мы рядом, вы можете <br /> найти ближайший к вам ЦРОН на
          карте
        </Text>
        <Box mt='auto'>
          <Button radius='xl' fw={400} size='lg' mr={10}>
            Консультация
          </Button>
          <Button
            variant='light'
            radius='xl'
            fw={400}
            size='lg'
            rightSection={<IconArrowUpRight stroke={1} />}
          >
            Офис ЦРОН на карте
          </Button>
        </Box>
      </Paper>
    </Container>
  </Box>
);
