import { Button, Stack, Text } from '@mantine/core';
import { IconMessageCircle, IconPhone, IconQrcode } from '@tabler/icons-react';
import { useState } from 'react';
import { useModeStore } from '../../store';
import { Form } from '../Form';
import { Wrap } from '../Wrap/Wrap';

// const titles: Record<Mode, string[]> = {
//   tg: ['Введите номер телефона', 'Введите код отправленный в Telegram'],
//   code: ['Введите номер телефона', 'Введите код отправленныйв СМС'],
//   number: ['Введите номер телефона', 'Введите последние 6 цифр звонившего номера'],
//   qr: ['Отсканируйте QR-код'],
// };

// phone: yup.string().transform((value, originalValue) => originalValue === '' ? null : value).matches(/^(\+7)(\s|\(|-)?(\d{3})(\s|\)|-)?(\d{3})(\s|-)?(\d{2})(\s|-)?(\d{2})$/g, {message: 'Введите корректный номер телефона'}).nullable().notRequired().optional(),

export const LoginTG = () => {
  const { setMode } = useModeStore();
  const [showMethods, setShowMethods] = useState(false);

  return (
    <Wrap>
      <Stack gap='0.5rem'>
        <Form />
        <Text className='text-center' mt={15} mb={15}>
          Или
        </Text>
        {showMethods ? (
          <>
            <Button
              variant='filled'
              color='rgba(245, 245, 248, 1)'
              c='#000'
              radius='xl'
              onClick={() => setMode('qr')}
            >
              <IconQrcode className='mr-2' /> Вход по QR-коду
            </Button>
            <Button
              radius='xl'
              variant='filled'
              color='rgba(245, 245, 248, 1)'
              c='#000'
              onClick={() => setMode('number')}
            >
              <IconPhone className='mr-2' /> Получить звонок
            </Button>
            <Button
              radius='xl'
              variant='filled'
              color='rgba(245, 245, 248, 1)'
              c='#000'
              onClick={() => setMode('code')}
            >
              <IconMessageCircle className='mr-2' /> Код в СМС
            </Button>
          </>
        ) : (
          <Button variant='transparent' fw={500} onClick={() => setShowMethods(true)}>
            Другие способы входа
          </Button>
        )}
      </Stack>
    </Wrap>
  );
};
