import logo from '@/shared/images/logo.svg';
import { Container } from '@/shared/ui';
import { Box, Button, Flex, Image } from '@mantine/core';
import NextImage from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export const Header = () => (
  <Box pt={15}>
    <Container className='flex justify-between'>
      <Image component={NextImage} src={logo} alt='' w={113} />
      <Flex gap={10}>
        <Button variant='light' radius='xl' fw={400}>
          Открыть ЦРОН
        </Button>
        <Button radius='xl' fw={400}>
          Запланировать встречу
        </Button>
      </Flex>
    </Container>
    <Container>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='#'>О нас</Link>
          </li>
          <li>
            <Link href='#'>ЦРОН для вас</Link>
          </li>
          <li>
            <Link href='#'>Когда это удобно?</Link>
          </li>
          <li>
            <Link href='#'>Агентам</Link>
          </li>
          <li>
            <Link href='#'>Площадка объявлений</Link>
          </li>
        </ul>
      </nav>
    </Container>
  </Box>
);
