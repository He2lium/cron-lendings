import { Box, Button, Container, Paper, Text } from '@mantine/core';
import styles from './styles.module.scss';

export const Find = () => (
  <Box pb={'5rem'}>
    <Container size={1200}>
      <Paper radius='lg' className={styles.banner} p='xl'>
        <Text fz={40} fw={700} lh={1}>
          Найдите то, что ищете, <br /> без лишней суеты
        </Text>
        <Text mt={22}>Тысячи предложений по всей стране. Просто выберите своё</Text>
        <Box mt='auto' className={styles.bannerButtons}>
          <Button radius='xl' fw={400} size='lg' mr={10}>
            Перейти в каталог
          </Button>
        </Box>
      </Paper>
    </Container>
  </Box>
);
