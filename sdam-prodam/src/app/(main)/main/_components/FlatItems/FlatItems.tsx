import { Button, Container, Flex, SimpleGrid, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export const FlatItems = ({
  title,
  href = '#',
  reversed = false,
  banner,
}: {
  title: string;
  href?: string;
  reversed?: boolean;
  banner: {
    title: string;
    href: string;
    img: string;
    btnText: string;
  };
}) => (
  <Container size={1200} className='ta-center' pt={'8rem'}>
    <Text mb={'1.5rem'} fw={700} fz={'2rem'}>
      <Link href={href} style={{ color: 'black' }}>
        {title}{' '}
        <IconChevronRight width={30} color='black' style={{ marginLeft: '.5rem' }} />
      </Link>
    </Text>
    <Flex direction={reversed ? 'row-reverse' : 'row'} gap={20}>
      <SimpleGrid cols={3} spacing='1.25rem'>
        <div className={styles.flatItem}>
          <Image
            width={300}
            height={190}
            quality={100}
            alt=''
            src='/flats.png'
            style={{ borderRadius: '1rem' }}
          />
          <Text fw={700} fz={'1.25rem'}>
            от 21 170 000 ₽
          </Text>
          <Text>Нескучный сад</Text>
          <Text>Адлер, мкр Курортный</Text>
        </div>
        <div className={styles.flatItem}>
          <Image
            width={300}
            height={190}
            quality={100}
            alt=''
            src='/flats.png'
            style={{ borderRadius: '1rem' }}
          />
          <Text fw={700} fz={'1.25rem'}>
            от 21 170 000 ₽
          </Text>
          <Text>Нескучный сад</Text>
          <Text>Адлер, мкр Курортный</Text>
        </div>
        <div className={styles.flatItem}>
          <Image
            width={300}
            height={190}
            quality={100}
            alt=''
            src='/flats.png'
            style={{ borderRadius: '1rem' }}
          />
          <Text fw={700} fz={'1.25rem'}>
            от 21 170 000 ₽
          </Text>
          <Text>Нескучный сад</Text>
          <Text>Адлер, мкр Курортный</Text>
        </div>
        <div className={styles.flatItem}>
          <Image
            width={300}
            height={190}
            quality={100}
            alt=''
            src='/flats.png'
            style={{ borderRadius: '1rem' }}
          />
          <Text fw={700} fz={'1.25rem'}>
            от 21 170 000 ₽
          </Text>
          <Text>Нескучный сад</Text>
          <Text>Адлер, мкр Курортный</Text>
        </div>
        <div className={styles.flatItem}>
          <Image
            width={300}
            height={190}
            quality={100}
            alt=''
            src='/flats.png'
            style={{ borderRadius: '1rem' }}
          />
          <Text fw={700} fz={'1.25rem'}>
            от 21 170 000 ₽
          </Text>
          <Text>Нескучный сад</Text>
          <Text>Адлер, мкр Курортный</Text>
        </div>
        <div className={styles.flatItem}>
          <Image
            width={300}
            height={190}
            quality={100}
            alt=''
            src='/flats.png'
            style={{ borderRadius: '1rem' }}
          />
          <Text fw={700} fz={'1.25rem'}>
            от 21 170 000 ₽
          </Text>
          <Text>Нескучный сад</Text>
          <Text>Адлер, мкр Курортный</Text>
        </div>
      </SimpleGrid>
      <div className={styles.banner} style={{ backgroundImage: banner.img }}>
        <Text fz={'1.5rem'} fw={700} lh={1}>
          {banner.title}
        </Text>
        <Button radius={'xl'} mt={'1.5rem'} fw={400}>
          {banner.btnText}
        </Button>
      </div>
    </Flex>
  </Container>
);
