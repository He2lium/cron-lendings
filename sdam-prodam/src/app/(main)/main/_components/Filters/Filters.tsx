'use client';

import {
  Button,
  Chip,
  Divider,
  Group,
  Select,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import { IconChevronDown, IconMap } from '@tabler/icons-react';
import { useState } from 'react';
import styles from './styles.module.scss';

export const Filters = () => {
  const [type, setType] = useState<string | null>('Новостройки');

  return (
    <form action='#'>
      <Group gap={20} mt={'3rem'}>
        <Group gap={20} className={styles.wrapper}>
          <Select
            variant='unstyled'
            data={['Новостройки', 'Новостройки2', 'Новостройки3']}
            value={type}
            rightSection={<IconChevronDown size={18} color='black' />}
            style={{ width: 'fit-content' }}
            onChange={setType}
            comboboxProps={{
              width: 'auto',
            }}
          />
          <Divider orientation='vertical' />
          <Chip.Group multiple>
            <Group justify='center' gap={5}>
              <Chip
                value='1'
                className={styles.chip}
                // style={{ backgroundColor: 'transparent' }}
              >
                Студия
              </Chip>
              <Chip
                value='2'
                className={styles.chip}
                // style={{ backgroundColor: 'transparent' }}
              >
                1
              </Chip>
              <Chip
                value='3'
                className={styles.chip}
                // style={{ backgroundColor: 'transparent' }}
              >
                2
              </Chip>
              <Chip
                value='4'
                className={styles.chip}
                // style={{ backgroundColor: 'transparent' }}
              >
                3
              </Chip>
            </Group>
          </Chip.Group>
          <Divider orientation='vertical' />
          <TextInput
            variant='unstyled'
            placeholder='Цена до ₽'
            className={styles.inputPrice}
          />
          <Divider orientation='vertical' />
          <UnstyledButton>Район</UnstyledButton>
        </Group>
        <Group>
          <UnstyledButton size='lg' className={styles.btnMap}>
            <Group gap={0}>
              На карте <IconMap width={20} style={{ marginLeft: '5px' }} />
            </Group>
          </UnstyledButton>
          <Button size='lg' radius='xl' fw={500}>
            Показать 24 новостройки
          </Button>
        </Group>
      </Group>
    </form>
  );
};
