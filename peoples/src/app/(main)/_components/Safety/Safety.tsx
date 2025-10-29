import { Button, Container, SimpleGrid, Text, Title } from '@mantine/core';
import styles from './styles.module.scss';

export const Safety = () => (
  <Container size={1200} pt={100}>
    <Title size='h2' order={2}>
      ЦРОН - место где о вас позаботятся
    </Title>
    <SimpleGrid cols={{ xs: 2, sm: 2, md: 3, lg: 3, xl: 3 }} className={styles.items}>
      <div>
        <Title size='h3' order={3} mb='1rem'>
          Подбор квартиры, покупателя, арендатора
        </Title>
        <Text>
          Мы найдём подходящий вариант под ваш запрос или поможем выгодно продать и сдать
          объект
        </Text>
      </div>
      <div>
        <Title size='h3' order={3} mb='1rem'>
          Переговорные, уютные офисы, кофе и спокойствие
        </Title>
        <Text>Комфортное пространство, где решаются важные вопросы без стресса</Text>
      </div>
      <div>
        <Title size='h3' order={3} mb='1rem'>
          Юридическая проверка объекта
        </Title>
        <Text>Проверим историю объекта, документы и исключим риски перед сделкой</Text>
      </div>
      <div>
        <Title size='h3' order={3} mb='1rem'>
          Помощь с ипотекой и страхованием
        </Title>
        <Text>
          Подадим заявку в банки, сравним условия и оформим страхование без лишней
          волокиты
        </Text>
      </div>
      <div>
        <Title size='h3' order={3} mb='1rem'>
          Оформление документов без беготни
        </Title>
        <Text>Все документы подготовим за вас - останется только подписать</Text>
      </div>
      <div>
        <Title size='h3' order={3} mb='1rem'>
          Запланируйте встречу в комфортном офисе
        </Title>
        <Text>Выберите удобные дату и время</Text>
        <Button variant='white' radius='xl' size='lg' fw={400}>
          Запланировать встречу
        </Button>
      </div>
    </SimpleGrid>
  </Container>
);
