import { CheckboxGroup } from '@/shared/ui';
import { Button, Chip, Group, Paper, Stack, Text, TextInput } from '@mantine/core';
import { DatePicker, DatesProvider } from '@mantine/dates';
import 'dayjs/locale/ru';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';

export const BooksForm = () => {
  const form = useForm();

  const handleSubmit = () => {};

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Stack align='stretch'>
        <Controller
          render={({ field }) => (
            <TextInput
              {...field}
              size='md'
              radius='lg'
              label='Имя'
              placeholder='Введите имя'
              classNames={{
                label: 'mb-2',
              }}
            />
          )}
          control={form.control}
          name='name'
        />
        <Controller
          render={({ field }) => (
            <TextInput
              {...field}
              size='md'
              radius='lg'
              label='Контактный телефон'
              placeholder='+7'
              classNames={{
                label: 'mb-2',
              }}
            />
          )}
          control={form.control}
          name='phone'
        />
        <Controller
          render={({ field }) => (
            <TextInput
              {...field}
              size='md'
              radius='lg'
              label='Электронная почта'
              placeholder='Ваш email'
              classNames={{
                label: 'mb-2',
              }}
            />
          )}
          control={form.control}
          name='email'
        />
        <Paper shadow='md' radius='md' p={20}>
          <Controller
            render={({ field }) => (
              <DatesProvider
                settings={{ locale: 'ru', firstDayOfWeek: 1, weekendDays: [0, 6] }}
              >
                <DatePicker
                  {...field}
                  size='lg'
                  defaultDate={new Date()}
                  headerControlsOrder={['level', 'previous', 'next']}
                  locale='ru'
                  styles={{
                    calendarHeader: {
                      maxWidth: '100%',
                    },
                    calendarHeaderLevel: {
                      justifyContent: 'flex-start',
                      paddingInlineStart: 8,
                    },
                    month: {
                      width: '100%',
                    },
                    monthCell: {
                      textAlign: 'center',
                    },
                    day: {
                      borderRadius: '50%',
                    },
                  }}
                />
              </DatesProvider>
            )}
            control={form.control}
            name='date'
          />
        </Paper>

        <label htmlFor='#'>Выберите время</label>
        <Chip.Group>
          <Group>
            <Chip value='12:30'>12:30</Chip>
            <Chip value='13:30'>13:30</Chip>
            <Chip value='16:00'>16:00</Chip>
          </Group>
        </Chip.Group>

        <label htmlFor='#'>Услуги</label>
        <Controller
          render={({ field }) => (
            <CheckboxGroup
              {...field}
              items={[
                { label: 'Юридическая поддержка', value: 's1' },
                { label: 'Юридическая поддержка', value: 's2' },
              ]}
            />
          )}
          control={form.control}
          name='services'
        />

        <Button radius='xl' fw={400} className='mt-10 mb-10'>
          Запланировать встречу
        </Button>

        <Text>
          Нажимая кнопку “Запланировать встречу” вы соглашаетесь с{' '}
          <Link href='#' style={{ color: 'var(--mantine-primary-color-filled)' }}>
            политикой конфиденциальности
          </Link>
        </Text>
      </Stack>
    </form>
  );
};
