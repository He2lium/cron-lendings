import { Card, NavLink, Text } from '@mantine/core';

import Link from 'next/link';
import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  title: ReactNode;
  links: {
    href: string;
    label: string;
    leftSection?: ReactNode;
    active?: boolean;
  }[];
  subtitle?: ReactNode;
}
export const MainSidebar: FC<Props> = ({ title, subtitle, links }) => (
  <Card w={310} bg='rgba(251, 251, 251, 1)' radius={'lg'} p={'1rem'}>
    <Text fw={700} fz={'1.8rem'} mb={'1rem'}>
      {title}
    </Text>
    {subtitle && <div>{subtitle}</div>}
    <div className={styles.nav}>
      {links.map((link) => (
        <NavLink {...link} key={link.label} component={Link} />
      ))}
    </div>
  </Card>
);
