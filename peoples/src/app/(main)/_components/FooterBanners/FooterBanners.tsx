import { Container } from '@/shared/ui';
import { Box, Button, Paper, Text } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import styles from './styles.module.scss';

export const FooterBanners = () => (
  <Box bg='#fbfbfb' pt='7rem' pb='7rem' mt='7rem'>
    <Container>
      <Paper radius='lg' className={styles.banner} p='xl'>
        <Text fz={40} fw={700} lh={1}>
          ЦРОН рядом когда <br /> нужно помочь
        </Text>
        <Text mt={22}>
          Запишитесь на консультацию или <br /> запланируйте встречу
        </Text>
        <Box mt='auto'>
          <Button radius='xl' fw={400} size='lg' mr={10}>
            Запланировать встречу
          </Button>
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
      <Paper radius='lg' className={styles.banner2} p='xl'>
        <Text fz={40} fw={700} lh={1} c='#fff'>
          СдамПродам, сервис надежных <br /> покупателей, продавцов <br />и арендаторов
        </Text>
        <Box mt='auto'>
          <Button
            variant='white'
            radius='xl'
            fw={400}
            size='lg'
            rightSection={<IconArrowUpRight stroke={1} />}
          >
            Перейти в СдамПродам
          </Button>
        </Box>
      </Paper>
    </Container>
  </Box>
);
