'use client';
import { $authStore } from '@/entities/user/model/store';
import { Avatar, Badge, Button, Group, NavLink, Paper, Stack, Text } from '@mantine/core';
import {
  IconBellFilled,
  IconBrandMessenger,
  IconBrandMessengerFilled,
  IconHeartFilled,
  IconLayoutGrid,
  IconLogout,
  IconReceipt,
  IconSettings,
  IconStack2,
  IconStar,
  IconStarFilled,
  IconWallet,
} from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import Link from 'next/link';
import styles from './styles.module.scss';

// const links = [
//   {
//     href: '#required-for-focus',
//     label: 'Отзывы',
//     leftSection: <IconStar stroke={1} />,
//   },
//   {
//     href: '#required-for-focus',
//     label: 'Отзывы',
//     leftSection: <IconStar stroke={1} />,
//   },
//   {
//     href: '#required-for-focus',
//     label: 'Отзывы',
//     leftSection: <IconStar stroke={1} />,
//   },
//   {
//     href: '#required-for-focus',
//     label: 'Отзывы',
//     leftSection: <IconStar stroke={1} />,
//   },
//   {
//     href: '#required-for-focus',
//     label: 'Отзывы',
//     leftSection: <IconStar stroke={1} />,
//   },
//   {
//     href: '#required-for-focus',
//     label: 'Отзывы',
//     leftSection: <IconStar stroke={1} />,
//   },
// ];
export const AccountSidebar = () => {
  const user = useUnit($authStore);

  return (
    <div className={styles.wrap}>
      <Stack gap={'1rem'}>
        <div className={styles.profile}>
          <Stack justify='center' style={{ alignItems: 'center' }} gap={'0.5rem'}>
            <Avatar
              src={`https://storage.yandexcloud.net/sp-media/images/optimized/avatar/${user?.avatar}/md.webp`}
              radius='50%'
              size={'8.5rem'}
            />
            <Text fw={700}>{user?.name}</Text>
            <Group>
              <IconStarFilled width={24} color='rgba(255, 176, 33, 1)' />
              <Text>12 Отзывов</Text>
            </Group>
          </Stack>
        </div>
        <div>
          <Group align='stretch'>
            <Paper bg='rgba(245, 245, 245, 1)' radius='lg' p='1rem' flex={1}>
              <Stack gap='0.5rem'>
                <Text c='rgba(192,192,192,1)'>Кошелек</Text>
                <Text fw={700}>1 985 ₽</Text>
                <Button variant='white' radius='lg' c='#222' fw={500}>
                  Пополнить
                </Button>
              </Stack>
            </Paper>
            <Paper bg='rgba(245, 245, 245, 1)' radius='lg' p='1rem' flex={1}>
              <Stack gap='0.5rem'>
                <Text c='rgba(192,192,192,1)'>Бонусы</Text>
                <Text fw={700}>585</Text>
              </Stack>
            </Paper>
          </Group>
        </div>
        <div>
          <Group align='stretch'>
            <Paper
              bg='rgba(245, 245, 245, 1)'
              radius='lg'
              p='1rem'
              flex={1}
              className={styles.iconItem}
            >
              <IconHeartFilled
                size={25}
                stroke={1}
                color='var(--mantine-primary-color-filled)'
              />
              <Badge size='sm' color='rgba(247, 27, 71, 1)' className={styles.iconBadge}>
                23
              </Badge>
            </Paper>
            <Paper
              bg='rgba(245, 245, 245, 1)'
              radius='lg'
              p='1rem'
              flex={1}
              className={styles.iconItem}
            >
              <IconBellFilled
                size={25}
                stroke={1}
                color='var(--mantine-primary-color-filled)'
              />
              <Badge
                size='sm'
                color='rgba(247, 27, 71, 1)'
                circle
                className={styles.iconBadge}
              >
                2
              </Badge>
            </Paper>
            <Paper
              bg='rgba(245, 245, 245, 1)'
              radius='lg'
              p='1rem'
              flex={1}
              className={styles.iconItem}
            >
              <IconBrandMessengerFilled
                size={25}
                stroke={1}
                color='var(--mantine-primary-color-filled)'
              />
              <Badge
                size='sm'
                color='rgba(247, 27, 71, 1)'
                circle
                className={styles.iconBadge}
              >
                3
              </Badge>
            </Paper>
          </Group>
        </div>
        <div className={styles.nav}>
          <NavLink
            href='/account'
            label='Мои объекты'
            leftSection={<IconStack2 stroke={1} />}
            active={window.location.pathname === '/account'}
            component={Link}
          />
          <NavLink
            href='#required-for-focus'
            label='Мои склады'
            leftSection={<IconLayoutGrid stroke={1} />}
            disabled
          />
          <NavLink
            href='#required-for-focus'
            label='Заявки'
            leftSection={<IconLogout stroke={1} />}
            rightSection={
              <Badge size='sm' color='rgba(247, 27, 71, 1)'>
                23
              </Badge>
            }
            disabled
          />
          <NavLink
            href='#required-for-focus'
            label='Сообщения'
            leftSection={<IconBrandMessenger stroke={1} />}
            rightSection={
              <Badge size='sm' color='rgba(247, 27, 71, 1)' circle>
                2
              </Badge>
            }
            disabled
          />
          <NavLink
            href='#required-for-focus'
            label='Отзывы'
            leftSection={<IconStar stroke={1} />}
            disabled
          />
          <NavLink
            href='#required-for-focus'
            label='Тарифы'
            leftSection={<IconWallet stroke={1} />}
            disabled
          />
          <NavLink
            href='#required-for-focus'
            label='Платежи'
            leftSection={<IconReceipt stroke={1} />}
            disabled
          />
          <NavLink
            href='/account/profile'
            label='Профиль и настройки'
            leftSection={<IconSettings stroke={1} />}
            component={Link}
            active={window.location.pathname === '/account/profile'}
          />
        </div>
      </Stack>
    </div>
  );
};
