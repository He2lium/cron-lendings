'use client';
import { generateRealtyDescFx } from '@/entities/realty/model/effects';
import { $genereatedResponse } from '@/entities/realty/model/store';
import { api } from '@/shared/services/api/api';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { useThrottledCallback } from '@mantine/hooks';
import {
  IconChartBubbleFilled,
  IconChevronDown,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { Map } from '../../../../../../shared/ui/map/Map';
import schema from './schema';
import styles from './styles.module.scss';

export const CreateRealtyForm = () => {
  const [addrs, setAddrs] = useState<any[]>([]);
  const [geo, setGeo] = useState<{ center: number[]; zoom: number }>({
    center: [55.76, 37.64],
    zoom: 10,
  });
  const [searchValue, setSearchValue] = useState('');
  const [generatedResponse, generatingResponse] = useUnit([
    $genereatedResponse,
    generateRealtyDescFx.pending,
  ]);
  const form = useForm<any>({ mode: 'onChange', resolver: yupResolver(schema) });
  const description = useWatch({ name: 'description', control: form.control });

  const handleGenereateResponse = () => {
    generateRealtyDescFx({
      pathParams: { realtyType: 'commercial' },
      description,
    });
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handleSearchAddress = useThrottledCallback(async () => {
    if (searchValue) {
      const r: any = await api
        .get(
          `https://suggest-maps.yandex.ru/v1/suggest?apikey=a7d42e70-610f-4ae5-94bb-e65f262cb898&text=${searchValue}`
        )
        .json();

      if (r.results?.length) {
        setAddrs(
          r.results.map((res) => {
            const label = res.subtitle
              ? `${res.subtitle.text}, ${res.title.text}`
              : res.title.text;

            return {
              label,
              value: `${label}${res.tags[0]}`,
            };
          })
        );
      }
    }
  }, 600);

  const handleFetchGeoCode = async (v: string) => {
    const r: any = await api
      .get(
        `https://geocode-maps.yandex.ru/v1/?apikey=9e6e112e-b3e5-4572-a0ce-55ad203d26c6&results=1&format=json&geocode=${v}`
      )
      .json();
    const pos =
      r.response.GeoObjectCollection.featureMember?.[0]?.GeoObject?.Point.pos.split(' ');

    if (pos) {
      setGeo((g) => ({ ...g, center: [+pos[1], +pos[0]], zoom: 15 }));
    }
  };

  useEffect(() => {
    handleSearchAddress();
  }, [searchValue]);

  useEffect(() => {
    if (generatedResponse) {
      form.setValue('description', generatedResponse);
    }
  }, [generatedResponse]);

  useEffect(() => {
    form.trigger();
  }, []);

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
            name='cadastralNumber'
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
        <Group align='flex-start'>
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
                error={form.formState.errors.buildingYear?.message as any}
              />
            )}
            control={form.control}
            name='buildingYear'
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
        <Select
          label='Адрес'
          variant='filled'
          data={addrs}
          radius={'xl'}
          flex={1}
          searchable
          onSearchChange={setSearchValue}
          onChange={(_, s) => {
            handleFetchGeoCode(s.label);
            console.log(s);
          }}
          searchValue={searchValue}
          rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
        />
        <Map {...geo} />
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
              // error={form.formState.errors.description?.message as any}
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
          <Button radius={'xl'} size='md' fw={500} disabled={!form.formState.isValid}>
            Опубликовать
          </Button>
          <Button
            radius={'xl'}
            size='md'
            fw={500}
            variant='light'
            disabled={!form.formState.isValid}
          >
            Сохранить черновик
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
