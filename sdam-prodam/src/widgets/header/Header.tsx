'use client';
import logo from '@/shared/images/sdamprodam_logo.png';
// import { EventEmitter } from '@/shared/utils';
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  Group,
  Image,
  Select,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import {
  IconChevronDown,
  IconHeart,
  IconMenu2,
  IconMessageCircle,
} from '@tabler/icons-react';
import NextImage from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss';

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 767px');
  const [opened, { close }] = useDisclosure(false);
  const [city, setCity] = useState<string | null>('Москва');

  // useEffect(() => {
  //   EventEmitter.on('TOGGLE_MOBILE_NAV', toggle);

  //   return () => {
  //     EventEmitter.off('TOGGLE_MOBILE_NAV', toggle);
  //   };
  // }, []);

  // useEffect(() => {
  //   fetch(`/proxy/user`, {
  //     method: 'get',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   });
  // }, []);

  const renderBtns = () => (
    <Group gap={10}>
      <ActionIcon variant='transparent'>
        <IconHeart width={24} stroke={1} color='black' />
      </ActionIcon>
      <ActionIcon variant='transparent' mr={'1rem'}>
        <IconMessageCircle width={24} stroke={1} color='black' />
      </ActionIcon>
      <Button
        radius='xl'
        fw={400}
        // onClick={() => EventEmitter.emit('TOGGLE_BOOKING_MEET')}
      >
        Разместить объявление
      </Button>
      <Button variant='light' radius='xl' fw={400}>
        Войти
      </Button>
    </Group>
  );

  const renderNav = () => (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='#'>Аренда</Link>
        </li>
        <li>
          <Link href='#'>Продажа</Link>
        </li>
        <li>
          <Link href='#'>Новостройки</Link>
        </li>
        <li>
          <Link href='#'>Дома и участки</Link>
        </li>
        <li>
          <Link href='#'>Комерческая</Link>
        </li>
        <li>
          <Link href='#'>Ипотека</Link>
        </li>
        <li>
          <Link href='#'>Биржа арендаторов</Link>
        </li>
        <li>
          <Link href='#'>Сервисы</Link>
        </li>
        <li>
          <Link href='#'>О нас</Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      <Box pt={15}>
        <Container size={1200}>
          <Flex justify='space-between'>
            <Group>
              <Image
                component={NextImage}
                src={logo}
                alt=''
                w={200}
                style={{ objectFit: 'contain' }}
                quality={100}
              />
              <Select
                variant='unstyled'
                data={['Москва', 'Санкт-Петербург', 'Казань', 'Крым']}
                value={city}
                rightSection={<IconChevronDown size={18} color='black' />}
                style={{ width: 'fit-content' }}
                onChange={setCity}
                comboboxProps={{
                  width: 'auto',
                }}
              />
            </Group>
            {isMobile ? (
              <IconMenu2
                width={30}
                height={30}
                color='var(--mantine-primary-color-filled)'
                // onClick={() => EventEmitter.emit('TOGGLE_MOBILE_NAV')}
              />
            ) : (
              renderBtns()
            )}
          </Flex>
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
