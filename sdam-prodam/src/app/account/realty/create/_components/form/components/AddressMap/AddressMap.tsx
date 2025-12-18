import { api } from '@/shared/services/api/api';
import { Map } from '@/shared/ui/map/Map';
import { Group, Select, Text } from '@mantine/core';
import { useThrottledCallback } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from '../../styles.module.scss';

const addressKinds = new Set(['locality', 'street', 'house']);

export const AddressMap = ({ city, onCityChange }: any) => {
  const form = useFormContext();
  const [addrs, setAddrs] = useState<any[]>([]);
  const [geo, setGeo] = useState<{ center: number[]; zoom: number }>({
    center: [55.76, 37.64],
    zoom: 10,
  });
  const [searchValue, setSearchValue] = useState('');

  const handleFetchGeoCode = async (v: string) => {
    const r: any = await api
      .get(
        `https://geocode-maps.yandex.ru/v1/?apikey=9e6e112e-b3e5-4572-a0ce-55ad203d26c6&results=1&print_address=1&format=json&geocode=${v}`
      )
      .json();
    const go = r.response.GeoObjectCollection.featureMember?.[0]?.GeoObject;
    const pos = go?.Point.pos.split(' ');

    const ad = go?.metaDataProperty.GeocoderMetaData.Address.Components.reduce(
      (acc, curr) =>
        addressKinds.has(curr.kind)
          ? {
              ...acc,
              [curr.kind]: curr.name,
            }
          : acc,
      {}
    );

    form.setValue('address.city', ad.locality);
    form.setValue('address.street', ad.street);
    form.setValue('address.house_number', ad.house);

    if (pos) {
      setGeo((g) => ({ ...g, center: [+pos[1], +pos[0]], zoom: 15 }));
    }
  };

  const handleSearchAddress = useThrottledCallback(async () => {
    if (searchValue) {
      const r: any = await api
        .get(
          `https://suggest-maps.yandex.ru/v1/suggest?apikey=a7d42e70-610f-4ae5-94bb-e65f262cb898&types=street,house,area,province&text=${city},${searchValue}`
        )
        .json();

      if (r.results?.length) {
        setAddrs(
          r.results.map((res) => {
            const label = res.title.text;

            return {
              label,
              value: `${label}${res.distance.value}`,
            };
          })
        );
      }
    }
  }, 600);

  useEffect(() => {
    handleSearchAddress();
  }, [searchValue]);
  console.log(addrs);
  return (
    <>
      <Group className={styles.addressWrap} align='flex-end' gap={0}>
        <Select
          label='Адрес'
          variant='unstyled'
          value={city}
          onChange={onCityChange}
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
        <Select
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
      </Group>
      {form.formState.errors.address?.city?.message && (
        <Text c={'var(--mantine-color-error)'} fz={'0.875rem'}>
          {form.formState.errors.address?.city?.message as any}
        </Text>
      )}
      <Map {...geo} />
    </>
  );
};
