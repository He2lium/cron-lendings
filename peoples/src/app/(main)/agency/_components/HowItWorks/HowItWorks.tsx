'use cilent';
import { Box, Container, Flex, Paper, Text, Title } from '@mantine/core';
import styles from './styles.module.scss';

export const HowItWorks = () => (
  <Box pt='7rem' pb='7rem'>
    <Container size={1200}>
      <Title size='h2' order={2} className='text-center'>
        Как это работает?
      </Title>
      <Text className='text-center' mt={20} c='rgba(0,0,0,.5)'>
        Три простых шага к высшему заработку
      </Text>
      <Flex justify='space-between' className={styles.items}>
        <div>
          <Paper radius='lg' className={styles.num}>
            01
          </Paper>
          <Text className={styles.text}>
            Приходите в ЦРОН <br /> и знакомитесь с сервисами
          </Text>
        </div>
        <div>
          <Paper radius='lg' className={styles.num}>
            02
          </Paper>
          <Text className={styles.text}>
            Выбираете подходящий <br /> тариф или подписку
          </Text>
        </div>
        <div>
          <Paper radius='lg' className={styles.num}>
            03
          </Paper>
          <Text className={styles.text}>
            Работаете в комфортной <br /> среде с полной поддержкой
          </Text>
        </div>
        <div>
          <Paper radius='lg' className={styles.num}>
            04
          </Paper>
          <Text className={styles.text}>
            Закрываете больше <br /> сделок - без перегруза
          </Text>
        </div>
      </Flex>
    </Container>
  </Box>
);
