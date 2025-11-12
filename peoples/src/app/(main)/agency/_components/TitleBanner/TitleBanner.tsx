import { Container, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';
import styles from './styles.module.scss';

export const TitleBanner = () => (
  <Container size={1200} className='text-center'>
    <Title style={{ marginTop: '11vw' }}>Работайте как профи с поддержкой ЦРОН</Title>
    <div className='mt-10'>
      <Text>ЦРОН - это не агентство, а партнёр.</Text>
      <Text>Вы - самостоятельный специалист, мы - ваша опора</Text>
    </div>
    <div className={styles.itemsHeadings}>
      <p>Платформа СдамПродам</p>
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

      {/* <Paper p='1.5rem' radius='lg' bg='rgba(243, 243, 246, 1)' className={styles.item}>
        <Text>Юридическая поддержка</Text>
      </Paper> */}
    </Flex>
  </Container>
);
