import { Box, Button, Container, Paper, Text } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import styles from './styles.module.scss';

export const Comission = () => (
  <Box bg='#fbfbfb' mt={'5rem'} pb={'5rem'}>
    <Container size={1200}>
      <Paper radius='lg' className={styles.banner} p='xl'>
        <Text fz={40} fw={700} lh={1}>
          0% офису, 100% вам
        </Text>
        <Text mt={22}>
          Тогда нам по пути, мы сервис нового поколения, <br /> для тех кто готов работать
          “на себя”
        </Text>
        <Box mt='auto' className={styles.bannerButtons}>
          <Button radius='xl' fw={400} size='lg' mr={10}>
            Забронировать офис
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
