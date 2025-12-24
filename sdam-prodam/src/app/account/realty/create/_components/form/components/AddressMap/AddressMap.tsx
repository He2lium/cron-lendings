import { $realty } from '@/entities/realty/model/store';
import { api } from '@/shared/services/api/api';
import { AnyObject } from '@/shared/types';
import { Map } from '@/shared/ui/map/Map';
import { Group, Select, Text } from '@mantine/core';
import { useThrottledCallback } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from '../../styles.module.scss';

const addressKinds = new Set(['locality', 'street', 'house']);

export const AddressMap = () => {
  const form = useFormContext();
  const [city, setCity] = useState<string | null>('Москва');
  const [addrs, setAddrs] = useState<any[]>([]);
  const [geo, setGeo] = useState<{ center: number[]; zoom: number }>({
    center: [55.76, 37.64],
    zoom: 10,
  });
  const realty = useUnit($realty);
  const [search, setSearch] = useState({
    value: '',
    withRequest: true,
  });

  const handleFetchGeoCode = async (v: string) => {
    const r: any = await api
      .get('/geocode-maps', {
        searchParams: { geocode: v, results: 1, print_address: 1, format: 'json' },
      })
      .json();
    const go = r.response.GeoObjectCollection.featureMember?.[0]?.GeoObject;
    const pos = go?.Point.pos.split(' ');
    const ad = go?.metaDataProperty.GeocoderMetaData.Address.Components.reduce(
      (acc: AnyObject, curr: AnyObject) =>
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
    form.setValue('address.region', ad.region || ad.locality);
    form.setValue('address.building', ad.house);
    form.setValue('address.coordinates', [+pos[1], +pos[0]]);

    if (pos) {
      setGeo((g) => ({ ...g, center: [+pos[1], +pos[0]], zoom: 15 }));
    }
  };

  const handleSearchAddress = useThrottledCallback(async () => {
    if (search.value) {
      const r: any = await api
        .get(`/suggest-maps`, {
          searchParams: {
            text: `${city},${search.value}`,
            types: 'street,house,area,province',
          },
        })
        .json();

      if (r.results?.length) {
        setAddrs(
          r.results.map((res: any) => {
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
    if (search.withRequest) {
      handleSearchAddress();
    }
  }, [search.value]);

  useEffect(() => {
    if (realty) {
      const newSearchValue = `${realty.address.street || ''}, ${realty.address.house_number}`;

      setAddrs([{ label: newSearchValue, value: newSearchValue }]);

      setSearch((s) => ({
        ...s,
        value: newSearchValue,
        withRequest: true,
      }));
    }
  }, [realty]);

  return (
    <>
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
        <Select
          variant='filled'
          data={addrs}
          radius={'0 1rem 1rem 0'}
          flex={1}
          searchable
          onSearchChange={(value) =>
            setSearch((s) => ({ ...s, value, withRequest: true }))
          }
          placeholder='Улица'
          onChange={(v, s) => {
            form.setValue('address.city', v, { shouldValidate: true });
            handleFetchGeoCode(s.label);
          }}
          searchValue={search.value}
          rightSection={<IconChevronDown size={18} color='black' stroke={1} />}
        />
      </Group>
      {(form.formState.errors.address as any)?.city?.message && (
        <Text c={'var(--mantine-color-error)'} fz={'0.875rem'}>
          {(form.formState.errors.address as any)?.city?.message as any}
        </Text>
      )}
      <Map {...geo} />
    </>
  );
};
