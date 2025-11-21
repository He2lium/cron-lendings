import { Container, Flex, Title } from '@mantine/core';
import Image from 'next/image';
import { Filters } from '../Filters/Filters';
import styles from './styles.module.scss';

export const TitleBanner = () => (
  <Container size={1200} ta={'center'}>
    <Title style={{ marginTop: '11vw' }}>Недвижимость в Москве</Title>
    <Filters />
    <div className={styles.itemsHeadings}>
      <p>Часто ищут</p>
      <p>Сервисы</p>
    </div>
    <Flex gap={20} justify='center'>
      <div className={styles.item}>
        <div className={styles.itemImage}>
          <Image src='/a_townhouse.png' width={125} height={125} alt='' />
        </div>
        <div className={styles.itemText}>
          Новостройки<span className={styles.itemCount}>34</span>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemImage}>
          <Image src='/a_house.png' width={125} height={125} alt='' />
        </div>
        <div className={styles.itemText}>
          Купить<span className={styles.itemCount}>74 954</span>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemImage}>
          <Image src='/a_room_inside.png' width={125} height={125} alt='' />
        </div>
        <div className={styles.itemText}>
          Снять<span className={styles.itemCount}>18 832</span>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemImage}>
          <Image src='/a_lock.png' width={125} height={125} alt='' />
        </div>
        <div className={styles.itemText}>Безопасные сделки</div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemImage}>
          <Image src='/a_office.png' width={125} height={125} alt='' />
        </div>
        <div className={styles.itemText}>Офисы ЦРОН</div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemImage}>
          <Image src='/a_balancer.png' width={125} height={125} alt='' />
        </div>
        <div className={styles.itemText}>Юр. поддержка</div>
      </div>
    </Flex>
  </Container>
);
