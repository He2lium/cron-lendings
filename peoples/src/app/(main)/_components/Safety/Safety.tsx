import { Container } from '@/shared/ui';
import { Button, Flex, Text } from '@mantine/core';
import styles from './styles.module.scss';

export const Safety = () => (
  <Container>
    <Text mt={100} fz='3.7rem' fw='bold' lh={1.2}>
      ЦРОН - место где о вас позаботятся
    </Text>
    <Flex className={styles.items} wrap='wrap'>
      <div>
        <Text fz={24} fw={700} lh={1.2} mb={8}>
          Подбор квартиры, покупателя, арендатора
        </Text>
        <Text>
          Мы найдём подходящий вариант под ваш запрос или поможем выгодно продать и сдать
          объект
        </Text>
      </div>
      <div>
        <Text fz={24} fw={700} lh={1.2} mb={8}>
          Переговорные, уютные офисы, кофе и спокойствие
        </Text>
        <Text>Комфортное пространство, где решаются важные вопросы без стресса</Text>
      </div>
      <div>
        <Text fz={24} fw={700} lh={1.2} mb={8}>
          Юридическая проверка объекта
        </Text>
        <Text>Проверим историю объекта, документы и исключим риски перед сделкой</Text>
      </div>
      <div>
        <Text fz={24} fw={700} lh={1.2} mb={8}>
          Помощь с ипотекой и страхованием
        </Text>
        <Text>
          Подадим заявку в банки, сравним условия и оформим страхование без лишней
          волокиты
        </Text>
      </div>
      <div>
        <Text fz={24} fw={700} lh={1.2} mb={8}>
          Оформление документов без беготни
        </Text>
        <Text>Все документы подготовим за вас - останется только подписать</Text>
      </div>
      <div>
        <Text fz={24} fw={700} lh={1.2} mb={8}>
          Запланируйте встречу в комфортном офисе
        </Text>
        <Text>Выберите удобные дату и время</Text>
        <Button variant='white' radius='xl' size='lg' fw={400}>
          Запланировать встречу
        </Button>
      </div>
    </Flex>
  </Container>
);
