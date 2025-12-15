import { RealtyCommercial } from '@/entities/realty/model/types';
import { TRANSLATES } from '@/shared/translates';
import { ActionIcon, Checkbox, Group, Menu, Stack, Text } from '@mantine/core';
import {
  IconBuilding,
  IconDotsVertical,
  IconEye,
  IconFilter,
  IconHeart,
  IconMapPin,
  IconMessage,
  IconPencil,
  IconPhone,
  IconTrash,
  IconUser,
} from '@tabler/icons-react';
import Image from 'next/image';
import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  data: RealtyCommercial;
}
export const Realty: FC<Props> = ({ data }) => (
  <Group align='stretch' justify='space-between'>
    <div className={styles.imageBlock}>
      <Image
        width={270}
        height={160}
        quality={100}
        alt=''
        src='/flats.png'
        style={{ borderRadius: '1rem' }}
      />
      <Checkbox className={styles.checkbox} />
      <div className={styles.num}>№ 3678</div>
    </div>
    <Stack justify='space-between' align='stretch'>
      <Group gap={5}>
        <IconBuilding width={30} stroke={1} color='var(--mantine-primary-color-filled)' />
        <Text c='var(--mantine-primary-color-filled)' fw={700}>
          {TRANSLATES[data.commercial_subtype]}
        </Text>
      </Group>
      <Group>
        <Stack gap={0}>
          <Text c='rgba(142, 142, 142, 1)' fz={'0.9rem'}>
            Аренда
          </Text>
          <Text fw={700} fz={'0.9rem'}>
            170 000 ₽/мес
          </Text>
        </Stack>
        <Stack gap={0}>
          <Text c='rgba(142, 142, 142, 1)' fz={'0.9rem'}>
            Продажа
          </Text>
          <Text fw={700} fz={'0.9rem'}>
            17 000 000 ₽/мес
          </Text>
        </Stack>
      </Group>
      <Group>
        <div className={styles.pint}>{data.total_area} м²</div>
        <div className={styles.pint}>1-2 этажи</div>
      </Group>
      <Group gap={5} mt='auto'>
        <IconMapPin size={18} stroke={1} color='var(--mantine-primary-color-filled)' />
        <Text c='rgba(142, 142, 142, 1)' fz={'0.9rem'}>
          {data.address.city}
        </Text>
      </Group>
    </Stack>
    <Stack justify='space-between'>
      <Group gap={5}>
        <Group gap={5}>
          <IconEye size={18} stroke={1} color='var(--mantine-primary-color-filled)' />
          <Text fz={'0.9rem'}>575</Text>
        </Group>
        <Group gap={5}>
          <IconUser size={18} stroke={1} color='var(--mantine-primary-color-filled)' />
          <Text fz={'0.9rem'}>575</Text>
        </Group>
        <Group gap={5}>
          <IconHeart size={18} stroke={1} color='var(--mantine-primary-color-filled)' />
          <Text fz={'0.9rem'}>575</Text>
        </Group>
        <Group gap={5}>
          <IconFilter size={18} stroke={1} color='var(--mantine-primary-color-filled)' />
          <Text fz={'0.9rem'}>1.5%</Text>
        </Group>
      </Group>
      <Text fz={'0.9rem'}>Активно еще 1 день</Text>
      <Text fz={'0.9rem'}>23 дня на СдамПродам</Text>
      <Group>
        <Group gap={5}>
          <IconPhone size={18} stroke={1} color='var(--mantine-primary-color-filled)' />
          <Text fz={'0.9rem'}>23</Text>
        </Group>
        <Group gap={5}>
          <IconMessage size={18} stroke={1} color='var(--mantine-primary-color-filled)' />
          <Text fz={'0.9rem'}>23</Text>
          <Text color='var(--mantine-primary-color-filled)'>+3</Text>
        </Group>
      </Group>
    </Stack>
    <Menu shadow='md' width={200}>
      <Menu.Target>
        <ActionIcon variant='filled' color='rgba(245, 245, 245, 1)' radius='50%'>
          <IconDotsVertical width={30} stroke={1} color='rgba(142, 142, 142, 1)' />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<IconPencil size={14} />}>Редактировать</Menu.Item>
        <Menu.Item color='red' leftSection={<IconTrash size={14} />}>
          Удалить
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  </Group>
);
