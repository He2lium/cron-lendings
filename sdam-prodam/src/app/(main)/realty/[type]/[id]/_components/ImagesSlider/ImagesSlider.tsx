import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Stack } from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';
import './styles.css';
export const ImagesSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

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
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/realt1.png'
            width={500}
            height={500}
            style={{ width: '100%' }}
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </Stack>
  );
};
