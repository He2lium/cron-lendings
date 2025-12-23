'use client';
import { createImageFx } from '@/entities/file-image/model/effects';
import { updateUserFx } from '@/entities/user/model/effects';
import { $authStore } from '@/entities/user/model/store';
import { fileToBinary } from '@/shared/utils/fileToBinary';
import { ActionIcon, Avatar, Button, Group, Stack, Text, TextInput } from '@mantine/core';
import { useFileDialog } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { IconPencil } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './styles.module.scss';

export default function ProfilePage() {
  const fileDialog = useFileDialog();
  const user = useUnit($authStore);
  const form = useForm<any>({
    defaultValues: {
      name: user?.name,
    },
  });

  useEffect(() => {
    const load = async () => {
      try {
        Array.from(fileDialog.files || []).forEach(async (file) => {
          const body = await fileToBinary(file);
          const r = await createImageFx({ body, type: 'avatar' });

          await updateUserFx({
            avatar: (r as any).key,
          });
          // images.prepend(r);
        });
      } catch (e) {}
    };
    load();
  }, [fileDialog.files]);

  const handleSave = async (values: { name: string }) => {
    try {
      await updateUserFx(values);
      notifications.show({
        message: 'Сохранено',
        color: 'green',
        position: 'top-center',
      });
    } catch (e) {
      notifications.show({
        message: 'Произошла ошибка',
        color: 'red',
        position: 'top-center',
      });
      console.log(e);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSave)}>
      <Stack gap={20}>
        <Text fz={'2.2rem'}>Профиль и настройки</Text>
        <Text fz={'1.25rem'}>Основные данные</Text>
        <Group>
          <Group className={styles.inputWrap}>
            <Controller
              render={({ field }) => (
                <TextInput {...field} variant='unstyled' placeholder='Введите имя' />
              )}
              control={form.control}
              name='name'
            />
            <ActionIcon bg={'none'}>
              <IconPencil width={20} color='rgba(192,192,192,1)' />
            </ActionIcon>
          </Group>
          <div className={styles.avatarWrap} onClick={() => fileDialog.open()}>
            <Avatar
              src={`https://storage.yandexcloud.net/sp-media/images/optimized/avatar/${user?.avatar}/md.webp`}
              radius='50%'
              size={'8.5rem'}
            />
            <div className={styles.avatarEditIcon}>
              <IconPencil width={20} height={20} color='rgba(192,192,192,1)' />
            </div>
          </div>
        </Group>
      </Stack>
      <Button radius={'lg'} fw={500} mb='5rem' type='submit'>
        Сохранить
      </Button>
    </form>
  );
}
