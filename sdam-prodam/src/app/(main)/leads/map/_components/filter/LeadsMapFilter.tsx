import { AnyObject } from '@/shared/types';
import { Group, Select, Stack, TextInput } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';

export const LeadsMapFilter = () => {
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
          flex={1}
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
          flex={1}
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
          flex={1}
          comboboxProps={{
            width: 'auto',
          }}
          rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
        />
        <TextInput variant='filled' radius='xl' placeholder='Поиск' flex={1} />
      </Group>
    </Stack>
  );
};
