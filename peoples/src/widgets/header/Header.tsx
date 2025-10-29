import logo from '@/shared/images/logo.svg';
import { EventEmitter } from '@/shared/utils';
import { Box, Button, Container, Drawer, Flex, Image } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconMenu2 } from '@tabler/icons-react';
import NextImage from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from './styles.module.scss';

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 767px');
  const [opened, { toggle, close }] = useDisclosure(false);

  useEffect(() => {
    EventEmitter.on('TOGGLE_MOBILE_NAV', toggle);

    return () => {
      EventEmitter.off('TOGGLE_MOBILE_NAV', toggle);
    };
  }, []);

  const renderBtns = () => (
    <Flex gap={10}>
      <Button variant='light' radius='xl' fw={400}>
        Открыть ЦРОН
      </Button>
      <Button
        radius='xl'
        fw={400}
        onClick={() => EventEmitter.emit('TOGGLE_BOOKING_MEET')}
      >
        Запланировать встречу
      </Button>
    </Flex>
  );

  const renderNav = () => (
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
  );

  return (
    <>
      <Box pt={15}>
        <Container size={1200} className='flex justify-between'>
          <Image
            component={NextImage}
            src={logo}
            alt=''
            w={113}
            style={{ objectFit: 'contain' }}
          />
          {isMobile ? (
            <IconMenu2
              width={30}
              height={30}
              color='var(--mantine-primary-color-filled)'
              onClick={() => EventEmitter.emit('TOGGLE_MOBILE_NAV')}
            />
          ) : (
            renderBtns()
          )}
        </Container>
        {!isMobile && <Container size={1200}>{renderNav()}</Container>}
      </Box>
      <Drawer.Root
        opened={opened}
        onClose={close}
        size={565}
        padding={40}
        position='right'
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header style={{ alignItems: 'flex-start' }}>
            <Drawer.Title />
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body h='calc(100% - 108px)'>mobile nav</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
};
