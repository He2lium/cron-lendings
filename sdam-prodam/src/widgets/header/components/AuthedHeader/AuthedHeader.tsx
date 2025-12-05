'use client';
import logo from '@/shared/images/sdamprodam_logo.png';
import styles from './styles.module.scss';

import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Menu,
  Text,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import {
  IconBellFilled,
  IconBrandMessengerFilled,
  IconChevronDown,
  IconHeartFilled,
  IconMapPin,
  IconMenu2,
} from '@tabler/icons-react';
import NextImage from 'next/image';
import Link from 'next/link';

export const AuthedHeader = () => {
  const isMobile = useMediaQuery('(max-width: 767px');
  const [opened, { close }] = useDisclosure(false);

  return (
    <>
      <Box>
        <div className={styles.topHeader}>
          <Container size={1200}>
            <Group justify='space-between'>
              <Group>
                <ul className={styles.nav}>
                  <li>
                    <Link href='#'>Каталог объектов</Link>
                  </li>
                  <li>
                    <Link href='#'>Биржа арендаторов</Link>
                  </li>
                  <li>
                    <Link href='#'>Склады</Link>
                  </li>
                </ul>
              </Group>
              <Group>
                <ActionIcon variant='transparent'>
                  <IconHeartFilled width={30} stroke={1} color='rgba(192, 192, 192, 1)' />
                </ActionIcon>
                <ActionIcon variant='transparent'>
                  <IconBellFilled width={30} stroke={1} color='rgba(192, 192, 192, 1)' />
                </ActionIcon>
                <ActionIcon variant='transparent'>
                  <IconBrandMessengerFilled
                    width={30}
                    stroke={1}
                    color='rgba(192, 192, 192, 1)'
                  />
                </ActionIcon>
                <Link href='#'>Мои объекты</Link>
                <Menu>
                  <Menu.Target>
                    <UnstyledButton>
                      <Group gap={10}>
                        <Avatar
                          src='https://img.freepik.com/free-photo/handsome-young-man-white-t-shirt_273609-7048.jpg?semt=ais_hybrid&w=740&q=80'
                          radius='xl'
                        />
                        <Text fz={'0.9rem'}>Михаил</Text>
                        <IconChevronDown
                          color='rgba(33, 33, 33, 1)'
                          stroke={1}
                          width={20}
                          style={{ marginLeft: -8 }}
                        />
                      </Group>
                    </UnstyledButton>
                  </Menu.Target>
                  <Menu.Dropdown>text</Menu.Dropdown>
                </Menu>
                <Button fw={500} radius='lg'>
                  Разместить объект/арендатора
                </Button>
              </Group>
            </Group>
          </Container>
        </div>
        <Container size={1200} mt={'1.5rem'}>
          <Flex justify='space-between'>
            <Group w={'100%'}>
              <Image
                component={NextImage}
                src={logo}
                alt=''
                w={200}
                style={{ objectFit: 'contain' }}
                quality={100}
              />
              <Button
                variant='light'
                leftSection={<IconMenu2 stroke={1} />}
                fw={500}
                radius='lg'
                h={44}
              >
                Категории
              </Button>
              <div className={styles.searchWrap}>
                <TextInput
                  variant='unstyled'
                  placeholder='Поиск объектов'
                  className={styles.searchInput}
                />
                <Button fw={500} radius='1rem'>
                  Поиск
                </Button>
              </div>
              <UnstyledButton>
                <Group gap={5}>
                  <IconMapPin
                    strokeWidth={1}
                    color='var(--mantine-primary-color-filled)'
                  />
                  Москва
                </Group>
              </UnstyledButton>
            </Group>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
