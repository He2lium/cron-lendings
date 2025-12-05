'use client';
import { generateRealtyDescFx } from '@/entities/realty/model/effects';
import { $genereatedResponse } from '@/entities/realty/model/store';
import {
  ActionIcon,
  Button,
  Checkbox,
  Group,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useYMaps } from '@pbe/react-yandex-maps';
import {
  IconChartBubbleFilled,
  IconChevronDown,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './styles.module.scss';

export const CreateRealtyForm = () => {
  const mapRef = useRef(null);
  const ymaps = useYMaps(['Map']);
  const [generatedResponseS, generatingResponse] = useUnit([
    $genereatedResponse,
    generateRealtyDescFx.pending,
  ]);
  const form = useForm<any>();

  const handleGenereateResponse = () => {
    generateRealtyDescFx({
      pathParams: { realtyType: 'commercial' },
      description: 'Продажа дома в центре Москвы',
    });
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 10,
    });
  }, [ymaps]);

  useEffect(() => {
    if (generatedResponseS) {
      form.setValue('description', generatedResponseS);
    }
  }, [generatedResponseS]);

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Stack mb={'5rem'}>
        <Text fz={'1.2rem'}>Основная информация</Text>
        <Controller
          render={({ field }) => (
            <Select
              {...field}
              label='Категория'
              variant='filled'
              data={['React', 'Angular', 'Vue', 'Svelte']}
              classNames={{ label: styles.label }}
              w={300}
              radius={'xl'}
              rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
            />
          )}
          control={form.control}
          name='realtyType'
        />
        <Text fz={'1.2rem'}>Аренда и продажа</Text>
        <Controller
          render={({ field }) => (
            <Select
              {...field}
              label='Тип сделки'
              variant='filled'
              data={['React', 'Angular', 'Vue', 'Svelte']}
              w={300}
              radius={'xl'}
              rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
            />
          )}
          control={form.control}
          name='realtyType'
        />
        <Text fz={'1.2rem'}>Информация о помещении</Text>
        <Group>
          <Controller
            render={({ field }) => (
              <Select
                {...field}
                label='Общая площадь  м²'
                variant='filled'
                data={['React', 'Angular', 'Vue', 'Svelte']}
                w={300}
                radius={'xl'}
                flex={1}
                rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
              />
            )}
            control={form.control}
            name='realtyType'
          />
          <Controller
            render={({ field }) => (
              <Select
                {...field}
                label='Состояние'
                variant='filled'
                data={['React', 'Angular', 'Vue', 'Svelte']}
                w={300}
                radius={'xl'}
                flex={1}
                rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
              />
            )}
            control={form.control}
            name='realtyType'
          />
          <Controller
            render={({ field }) => (
              <TextInput
                {...field}
                variant='filled'
                radius='xl'
                label='Кадастровый номер'
                flex={1}
              />
            )}
            control={form.control}
            name='realtyType'
          />
        </Group>
        <Group>
          <Controller
            render={({ field }) => (
              <Select
                {...field}
                label='Этаж(и)'
                variant='filled'
                data={['React', 'Angular', 'Vue', 'Svelte']}
                radius={'xl'}
                flex={1}
                rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
              />
            )}
            control={form.control}
            name='realtyType'
          />
          <Controller
            render={({ field }) => (
              <TextInput
                {...field}
                variant='filled'
                radius='xl'
                label='Высота потолков м'
                flex={1}
              />
            )}
            control={form.control}
            name='realtyType'
          />
          <Controller
            render={({ field }) => (
              <TextInput
                {...field}
                variant='filled'
                radius='xl'
                label='Кол-во мокрых точек'
                flex={1}
              />
            )}
            control={form.control}
            name='realtyType'
          />
          <Controller
            render={({ field }) => (
              <TextInput
                {...field}
                variant='filled'
                radius='xl'
                label='Эл. мощность кВт'
                flex={1}
              />
            )}
            control={form.control}
            name='realtyType'
          />
          <Controller
            render={({ field }) => (
              <Select
                {...field}
                label='Разгрузка'
                variant='filled'
                data={['React', 'Angular', 'Vue', 'Svelte']}
                radius={'xl'}
                flex={1}
                rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
              />
            )}
            control={form.control}
            name='realtyType'
          />
        </Group>
        <Text fz={'1.2rem'}>Информация о здании</Text>
        <Group>
          <Controller
            render={({ field }) => (
              <Select
                {...field}
                label='Тип здания'
                variant='filled'
                data={['React', 'Angular', 'Vue', 'Svelte']}
                radius={'xl'}
                flex={1}
                rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
              />
            )}
            control={form.control}
            name='realtyType'
          />
          <Controller
            render={({ field }) => (
              <TextInput
                {...field}
                variant='filled'
                radius='xl'
                label='Год постройки'
                flex={1}
              />
            )}
            control={form.control}
            name='realtyType'
          />
          <Controller
            render={({ field }) => (
              <TextInput
                {...field}
                variant='filled'
                radius='xl'
                label='Количество этажей'
                flex={1}
              />
            )}
            control={form.control}
            name='realtyType'
          />
          <Controller
            render={({ field }) => (
              <Select
                {...field}
                label='Парковка'
                variant='filled'
                data={[
                  { label: 'Есть', value: 'true' },
                  { label: 'нет', value: 'false' },
                ]}
                radius={'xl'}
                flex={1}
                rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
              />
            )}
            control={form.control}
            name='realtyType'
          />
        </Group>
        <Controller
          render={({ field }) => (
            <TextInput {...field} variant='filled' radius='xl' label='Адрес' flex={1} />
          )}
          control={form.control}
          name='realtyType'
        />

        {/* <div ref={mapRef} style={{ width: '100%', height: '240px' }} /> */}
        <Text fz={'1.2rem'}>Контактная информация</Text>
        <Group>
          <Controller
            render={({ field }) => (
              <TextInput
                {...field}
                variant='filled'
                radius='xl'
                label='Номер телефона'
                flex={1}
              />
            )}
            control={form.control}
            name='phone'
          />
          <Controller
            render={({ field }) => (
              <TextInput
                {...field}
                variant='filled'
                radius='xl'
                label='Дополнительный номер'
                flex={1}
              />
            )}
            control={form.control}
            name='additional_phone'
          />
        </Group>
        <Controller
          render={({ field }) => <Checkbox {...field} label='Я собственник' />}
          control={form.control}
          name='owner'
        />
        <Controller
          render={({ field }) => (
            <Textarea
              {...field}
              label='Описание'
              variant='filled'
              radius='1rem 1rem 0 0'
              flex={1}
              autosize
              minRows={6}
              maxRows={6}
              disabled={generatingResponse}
            />
          )}
          control={form.control}
          name='description'
        />

        <div className={styles.textareaButtonWrap}>
          <Button
            radius={'xl'}
            fw={500}
            leftSection={<IconChartBubbleFilled size={18} stroke={1} />}
            className={styles.textareaButton}
            onClick={handleGenereateResponse}
            disabled={generatingResponse}
            loading={generatingResponse}
          >
            Сгенерировать текст с помощью YandexGPT
          </Button>
        </div>
        <Text fz={'1.2rem'}>Фотографии объекта</Text>
        <Group gap='10' justify='space-between'>
          <div className={styles.imageBlock}>
            <Image
              width={200}
              height={200}
              quality={100}
              alt=''
              src='/flats.png'
              style={{ borderRadius: '1rem' }}
            />
            <ActionIcon variant='white' radius={'md'} className={styles.deleteIcon}>
              <IconTrash
                stroke={1}
                color='var(--mantine-primary-color-filled)'
                size={18}
              />
            </ActionIcon>
          </div>
          <div className={styles.imageBlock}>
            <Image
              width={200}
              height={200}
              quality={100}
              alt=''
              src='/flats.png'
              style={{ borderRadius: '1rem' }}
            />
            <ActionIcon variant='white' radius={'md'} className={styles.deleteIcon}>
              <IconTrash
                stroke={1}
                color='var(--mantine-primary-color-filled)'
                size={18}
              />
            </ActionIcon>
          </div>
          <div className={styles.imageBlock}>
            <Image
              width={200}
              height={200}
              quality={100}
              alt=''
              src='/flats.png'
              style={{ borderRadius: '1rem' }}
            />
            <ActionIcon variant='white' radius={'md'} className={styles.deleteIcon}>
              <IconTrash
                stroke={1}
                color='var(--mantine-primary-color-filled)'
                size={18}
              />
            </ActionIcon>
          </div>
          <div className={styles.addImage}>
            <IconPlus
              stroke={0.5}
              color='var(--mantine-primary-color-filled)'
              size={70}
            />
          </div>
        </Group>
        <Group mt={'2rem'}>
          <Button radius={'xl'} size='md' fw={500}>
            Опубликовать
          </Button>
          <Button radius={'xl'} size='md' fw={500} variant='light'>
            Сохранить черновик
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
