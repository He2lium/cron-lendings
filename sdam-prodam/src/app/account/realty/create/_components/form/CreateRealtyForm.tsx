'use client';
import { createRealtyFx, generateRealtyDescFx } from '@/entities/realty/model/effects';
import { $genereatedResponse } from '@/entities/realty/model/store';
import { api } from '@/shared/services/api/api';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ActionIcon,
  Button,
  Checkbox,
  Group,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useFileDialog, useThrottledCallback } from '@mantine/hooks';
import {
  IconChartBubbleFilled,
  IconChevronDown,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { Map } from '../../../../../../shared/ui/map/Map';
import schema from './schema';
import styles from './styles.module.scss';

export const CreateRealtyForm = () => {
  const [city, setCity] = useState<string | null>('Москва');
  const [addrs, setAddrs] = useState<any[]>([]);
  const fileDialog = useFileDialog();
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
    createRealtyFx({
      pathParams: { realtyType: 'commercial' },
      ...values,
      description,
      total_area: +values.total_area,
    });
    console.log(values);
  };

  const handleSearchAddress = useThrottledCallback(async () => {
    if (searchValue) {
      const r: any = await api
        .get(
          `https://suggest-maps.yandex.ru/v1/suggest?apikey=a7d42e70-610f-4ae5-94bb-e65f262cb898&text=${city},${searchValue}`
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

    const address =
      r.response.GeoObjectCollection.metaDataProperty.GeocoderResponseMetaData.request;

    form.setValue('address.city', address);
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
              data={[
                {
                  label: 'Офис',
                  value: 'office',
                },
                {
                  label: 'Кафетерий',
                  value: 'cafeteria',
                },
                {
                  label: 'Свободное назначение',
                  value: 'free_zone',
                },
                {
                  label: 'Магазин',
                  value: 'store',
                },
              ]}
              classNames={{ label: styles.label }}
              error={form.formState.errors.commercial_subtype?.message as any}
              w={300}
              radius={'xl'}
              rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
            />
          )}
          control={form.control}
          name='commercial_subtype'
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
              <TextInput
                {...field}
                variant='filled'
                radius='xl'
                label='Общая площадь  м²'
                flex={1}
                error={form.formState.errors.total_area?.message as any}
              />
            )}
            control={form.control}
            name='total_area'
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
                error={form.formState.errors.cadastral_number?.message as any}
              />
            )}
            control={form.control}
            name='cadastral_number'
          />
        </Group>
        <Group>
          <Controller
            render={({ field }) => (
              <Select
                {...field}
                label='Этаж(и)'
                variant='filled'
                data={['1', '2', '3', 'Svelte']}
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
                error={form.formState.errors.building_year?.message as any}
              />
            )}
            control={form.control}
            name='building_year'
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
        <Group className={styles.addressWrap} align='flex-end' gap={0}>
          <Select
            label='Адрес'
            variant='unstyled'
            value={city}
            onChange={setCity}
            data={['Москва', 'Санкт-Петербург', 'Сочи']}
            rightSection={<IconChevronDown size={18} color='black' />}
            style={{ width: 'fit-content' }}
            classNames={{
              wrapper: styles.addrCityWrap,
            }}
            comboboxProps={{
              width: 'auto',
            }}
          />
          <Controller
            render={({ field }) => (
              <Select
                {...field}
                variant='filled'
                data={addrs}
                radius={'0 1rem 1rem 0'}
                flex={1}
                searchable
                onSearchChange={setSearchValue}
                placeholder='Улица'
                onChange={(v, s) => {
                  form.setValue('address.city', v, { shouldValidate: true });
                  handleFetchGeoCode(s.label);
                }}
                searchValue={searchValue}
                rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
              />
            )}
            control={form.control}
            name='address.city'
          />
        </Group>
        {form.formState.errors.address?.city?.message && (
          <Text c={'var(--mantine-color-error)'} fz={'0.875rem'}>
            {form.formState.errors.address?.city?.message as any}
          </Text>
        )}
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
              // className={'mantine-focus-never'}
              error={!!form.formState.errors.description?.message as any}
              classNames={{
                input: cn(styles.textAreaInput, {
                  [styles.error]: !!form.formState.errors.description?.message,
                }),
              }}
            />
          )}
          control={form.control}
          name='description'
        />
        <div
          className={cn(styles.textareaButtonWrap, {
            [styles.textareaError]: !!form.formState.errors.description?.message,
          })}
        >
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
        {form.formState.errors.description?.message && (
          <Text c={'var(--mantine-color-error)'} fz={'0.875rem'}>
            {form.formState.errors.description?.message as any}
          </Text>
        )}
        <Text fz={'1.2rem'}>Фотографии объекта</Text>
        <SimpleGrid cols={{ base: 4 }}>
          {Array.from(fileDialog.files || []).map((file) => (
            <div className={styles.imageBlock} key={file.name}>
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
          ))}

          <div className={styles.addImage} onClick={fileDialog.open}>
            <IconPlus
              stroke={0.5}
              color='var(--mantine-primary-color-filled)'
              size={70}
            />
          </div>
        </SimpleGrid>
        <Group mt={'2rem'}>
          <Button
            radius={'xl'}
            type='submit'
            size='md'
            fw={500}
            disabled={!form.formState.isValid}
          >
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
