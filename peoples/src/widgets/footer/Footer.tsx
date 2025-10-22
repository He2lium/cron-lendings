import { Container } from '@/shared/ui';
import Link from 'next/link';
import styles from './styles.module.scss';

export const Footer = () => (
  <div className={styles.footer}>
    <Container>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='#'>Вся недвижимость</Link>
          </li>
          <li>
            <Link href='#'>Стань частью команды</Link>
          </li>
          <li>
            <Link href='#'>Пользовательское соглашение</Link>
          </li>
          <li>
            <Link href='#'>Помощь</Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.nav}>
        <ul>
          <li>ООО “ЦРОН”</li>
          <li className='ml-auto'>
            <Link href='#'>Сайт создан whlges</Link>
          </li>
          <li>
            <Link href='#'>Проект компании ЦРОН</Link>
          </li>
        </ul>
      </nav>
    </Container>
  </div>
);
