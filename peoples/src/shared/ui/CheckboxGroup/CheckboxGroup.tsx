import { Checkbox, Group, Stack, Text } from '@mantine/core';
import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  items: {
    label: ReactNode;
    value: string;
  }[];
  value: string[];
  name: string;
  onChange: any;
  className?: string;
}

export const CheckboxGroup: FC<Props> = ({ items, ...rest }) => (
  <Checkbox.Group
    {...rest}

    // label='Pick packages to install'
    // description='Choose all packages that you will need in your application'
  >
    <Stack gap={16}>
      {items.map((item) => (
        <Checkbox.Card
          radius='md'
          value={item.value}
          key={item.value}
          className={styles.root}
        >
          <Group wrap='nowrap' align='center' justify='space-between'>
            <Text>{item.label}</Text>
            <Checkbox.Indicator />
          </Group>
        </Checkbox.Card>
      ))}
    </Stack>
  </Checkbox.Group>
);
