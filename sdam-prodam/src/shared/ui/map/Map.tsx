import { Placemark, Map as RYMap, YMaps } from '@iminside/react-yandex-maps';
import { FC, useEffect, useState } from 'react';

interface Props {
  center?: number[];
  zoom?: number;
  height?: number;
}
export const Map: FC<Props> = ({ center = [55.76, 37.64], zoom = 10, height = 240 }) => {
  const [state, setState] = useState({ center, zoom });

  useEffect(() => {
    setState((s) => ({ ...s, center, zoom }));
  }, [center, zoom]);

  return (
    <YMaps>
      <RYMap width={'100%'} height={height} state={state}>
        <Placemark geometry={center} />
      </RYMap>
    </YMaps>
  );
};
