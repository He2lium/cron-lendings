import { AnyObject } from '@/shared/types';
import { Alert, Group, Select, Stack } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';

export const LeadsFilter = () => {
  const [filter, setFilter] = useState<null | AnyObject>({});

  const handleChange = (v: any) => {};

  return (
    <Stack>
      <Group>
        <Select
          placeholder='Точка интереса'
          variant='filled'
          data={['React', 'Angular', 'Vue', 'Svelte']}
          radius={'xl'}
          style={{ width: 'fit-content' }}
          comboboxProps={{
            width: 'auto',
          }}
          rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
        />
        <Select
          placeholder='Город'
          variant='filled'
          data={['React', 'Angular', 'Vue', 'Svelte']}
          radius={'xl'}
          style={{ width: 'fit-content' }}
          comboboxProps={{
            width: 'auto',
          }}
          rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
        />
        <Select
          placeholder='Статус лида'
          variant='filled'
          data={['React', 'Angular', 'Vue', 'Svelte']}
          radius={'xl'}
          style={{ width: 'fit-content' }}
          comboboxProps={{
            width: 'auto',
          }}
          rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
        />
        <Select
          placeholder='Сортировать по'
          variant='filled'
          data={['React', 'Angular', 'Vue', 'Svelte']}
          radius={'xl'}
          style={{ width: 'fit-content' }}
          ml={'auto'}
          comboboxProps={{
            width: 'auto',
          }}
          rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
        />
      </Group>
      <Alert variant='light' color='green' radius={'lg'} p={'xs'}>
        Статус лида
      </Alert>
    </Stack>
  );
};
