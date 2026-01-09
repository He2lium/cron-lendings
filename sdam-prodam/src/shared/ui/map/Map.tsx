'use client';
import { Clusterer, Placemark, Map as RYMap, YMaps } from '@iminside/react-yandex-maps';
import { IconMapPinFilled } from '@tabler/icons-react';
import { FC, useState } from 'react';
import styles from './styles.module.scss';

interface State {
  center?: number[];
  zoom?: number;
}
interface Props {
  height?: number;
  points?: {
    geometry: number[][];
    key: string | number;
    properties: {
      iconContent?: string;
      balloonContent?: string;
    };
    originalObj?: any;
  }[];
  defaultState?: State;
  onBoundsChange?: (e: any) => void;
}
export const Map: FC<Props> = ({
  points,
  height = 240,
  defaultState = {
    center: [55.76, 37.64],
    zoom: 10,
  },
  onBoundsChange,
}) => {
  const [state, setState] = useState<State>(defaultState);

  const handleBoundsChange = (e: any) => {
    const { newZoom, newCenter } = e.originalEvent;
    setState((s) => ({ ...s, zoom: newZoom, center: newCenter }));
    onBoundsChange?.(e);
  };
  console.log(points);

  return (
    <div className={styles.wrap}>
      <YMaps>
        <RYMap
          width={'100%'}
          height={height}
          state={state}
          onBoundsChange={handleBoundsChange}
        >
          <Clusterer>
            {points?.map((point) => (
              <Placemark
                {...point}
                // geometry={point}
                // key={point.toString()}
                // properties={{
                //   iconContent: '2',
                //   balloonContent:
                //     '<div id="driver-2" class="driver-card">ЖК "Новый Век" <br /> <strong>12 лидов</strong></div>',
                // }}
                onBalloonOpen={() => {
                  console.log('opened');
                }}
                onBalloonClose={() => {
                  console.log('closed');
                }}
                modules={['geoObject.addon.balloon']}
              />
            ))}
          </Clusterer>
        </RYMap>
      </YMaps>
      {!points && (
        <IconMapPinFilled
          size={40}
          color='var(--mantine-primary-color-filled)'
          className={styles.pin}
        />
      )}
    </div>
  );
};
