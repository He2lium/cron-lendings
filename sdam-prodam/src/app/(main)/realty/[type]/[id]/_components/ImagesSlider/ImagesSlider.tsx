import { Image } from '@/entities/file-image/model/types';
import { Stack } from '@mantine/core';
import NextImage from 'next/image';
import { FC, useState } from 'react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';

interface Props {
  images: Image[];
}

export const ImagesSlider: FC<Props> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  console.log(images);
  return (
    <Stack>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className='mySwiper2'
      >
        {images.map((image) => (
          <SwiperSlide key={image._id}>
            <NextImage
              src={image._paths.lg || ''}
              width={500}
              height={500}
              style={{ width: '100%' }}
              alt=''
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className='mySwiper'
      >
        {images.map((image) => (
          <SwiperSlide key={image._id}>
            <NextImage
              src={image._paths.md || ''}
              width={500}
              height={500}
              style={{ width: '100%' }}
              alt=''
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};
