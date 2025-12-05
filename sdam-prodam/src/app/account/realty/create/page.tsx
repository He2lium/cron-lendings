'use client';
import { Stack, Text } from '@mantine/core';
import { YMaps } from '@pbe/react-yandex-maps';
import { CreateRealtyForm } from './_components/form/CreateRealtyForm';

export default function CreateRealtyPage() {
  return (
    <Stack>
      <Text fz={'2.2rem'}>Разместить объект/арендатора/склад</Text>
      <YMaps>
        <CreateRealtyForm />
      </YMaps>
    </Stack>
  );
}
