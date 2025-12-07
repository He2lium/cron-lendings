import { Card, NavLink, Text } from '@mantine/core';
import {
  IconFileTypeDoc,
  IconPhotoScan,
  IconStack2,
  IconTrash,
} from '@tabler/icons-react';
import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

console.log(styles);
interface Props {
  title: ReactNode;
  subtitle?: ReactNode;
}
export const MainSidebar: FC<Props> = ({ title, subtitle }) => (
  <Card w={310} bg='rgba(251, 251, 251, 1)' radius={'lg'} p={'1rem'}>
    <Text fw={700} fz={'1.8rem'} mb={'1rem'}>
      {title}
    </Text>
    {subtitle && <div>{subtitle}</div>}
    <div className={styles.nav}>
      <NavLink
        href='#required-for-focus'
        label='Все файлы'
        leftSection={<IconStack2 stroke={1} />}
        active
      />
      <NavLink
        href='#required-for-focus'
        label='Фото'
        leftSection={<IconPhotoScan stroke={1} />}
      />
      <NavLink
        href='#required-for-focus'
        label='Документы'
        leftSection={<IconFileTypeDoc stroke={1} />}
      />
      <NavLink
        href='#required-for-focus'
        label='Корзина'
        leftSection={<IconTrash stroke={1} />}
      />
    </div>
  </Card>
);
