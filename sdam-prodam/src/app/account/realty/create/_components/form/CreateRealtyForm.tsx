'use client';
import { createImageFx } from '@/entities/file-image/model/effects';
import {
  createRealtyFx,
  fetchRealtyFx,
  generateRealtyDescFx,
  resetRealtyEv,
  updateRealtyFx,
} from '@/entities/realty/model/effects';
import { $genereatedResponse, $realty } from '@/entities/realty/model/store';
import { fileToBinary } from '@/shared/utils/fileToBinary';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ActionIcon,
  Button,
  Checkbox,
  Group,
  Loader,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useFileDialog } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import {
  IconChartBubbleFilled,
  IconChevronDown,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useWatch,
} from 'react-hook-form';
import { AddressMap } from './components/AddressMap/AddressMap';
import schema from './schema';
import styles from './styles.module.scss';

export const CreateRealtyForm = () => {
  const { id } = useParams();
  const fileDialog = useFileDialog();
  const router = useRouter();
  const imageLoading = useUnit(createImageFx.pending);
  const [generatedResponse, generatingResponse] = useUnit([
    $genereatedResponse,
    generateRealtyDescFx.pending,
  ]);
  const [realty, realtyPending] = useUnit([$realty, fetchRealtyFx.pending]);
  const form = useForm<any>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const images = useFieldArray({ name: 'images', control: form.control, keyName: '_id' });
  const description = useWatch({ name: 'description', control: form.control });

  const handleGenereateResponse = () => {
    generateRealtyDescFx({
      pathParams: { realtyType: 'commercial' },
      description,
    });
  };

  const handleSubmit = async (values: any) => {
    try {
      const fx = id ? updateRealtyFx : createRealtyFx;
      console.log(values);
      console.log({
        ...values,
        pathParams: { realtyType: 'commercial', id },
        address: {
          ...values.address,
          coordinates: {
            type: 'Point',
            coordinates: values.address.coordinates,
          },
        },
        description,
        total_area: +values.total_area,
        images: values.images?.fields?.map((img: any) => img.key),
      });

      await fx({
        pathParams: { realtyType: 'commercial', id },
        ...values,
        address: {
          ...values.address,
          coordinates: {
            type: 'Point',
            coordinates: values.address.coordinates,
          },
        },
        description,
        total_area: +values.total_area,
        images: values.images?.fields?.map((img: any) => img.key),
      });

      notifications.show({
        message: 'Сохранено',
        color: 'green',
        position: 'top-center',
      });

      router.push('/account');
    } catch (e) {
      notifications.show({
        message: 'Произошла ошибка',
        color: 'red',
        position: 'top-center',
      });
      console.log(e);
    }
  };

  useEffect(() => {
    if (generatedResponse) {
      form.setValue('description', generatedResponse);
    }
  }, [generatedResponse]);

  useEffect(() => {
    if (id && !realty) {
      fetchRealtyFx({ pathParams: { id, realtyType: 'commercial' } });
    }
    // if (id && !realtyPending) {
    // }
    // if (!realtyPending) {
    //   form.trigger();
    // }
    if (realty && !realtyPending) {
      form.reset(
        {
          ...realty,
          images:
            realty.images?.map((key: string) => ({
              key,
            })) || [],
        },
        { keepErrors: false, keepDirty: false }
      );
      form.trigger();
    }
    if (!id) {
      form.trigger();
    }

    return () => {
      if (realty) {
        resetRealtyEv();
      }
    };
  }, [realty]);

  useEffect(() => {
    const load = async () => {
      Array.from(fileDialog.files || []).forEach(async (file) => {
        const body = await fileToBinary(file);
        const r = await createImageFx(body);

        images.prepend(r);
      });
    };
    load();
  }, [fileDialog.files]);

  return (
    <FormProvider {...form}>
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
              name='address.floor'
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
              name='address.total_floors'
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
          <AddressMap />
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
            {images.fields.map((field: any, index: number) => (
              <div className={styles.imageBlock} key={field.key || field}>
                <Image
                  width={200}
                  height={200}
                  quality={100}
                  alt=''
                  src={`https://storage.yandexcloud.net/sp-media/images/optimized/basic/${field.key || field}/md.webp`}
                  style={{ borderRadius: '1rem' }}
                />
                <ActionIcon
                  variant='white'
                  radius={'md'}
                  className={styles.deleteIcon}
                  onClick={() => images.remove(index)}
                >
                  <IconTrash
                    stroke={1}
                    color='var(--mantine-primary-color-filled)'
                    size={18}
                  />
                </ActionIcon>
              </div>
            ))}

            <div className={styles.addImage} onClick={fileDialog.open}>
              {imageLoading ? (
                <Loader color='var(--mantine-primary-color-filled)' />
              ) : (
                <IconPlus
                  stroke={0.5}
                  color='var(--mantine-primary-color-filled)'
                  size={70}
                />
              )}
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
    </FormProvider>
  );
};
