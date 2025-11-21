import { Container, SimpleGrid } from '@mantine/core';
import Link from 'next/link';
import styles from './styles.module.scss';

export const Footer = () => (
  <div className={styles.footer}>
    <Container size={1200}>
      <SimpleGrid cols={4} spacing='xl' verticalSpacing='2rem' pb={'3rem'}>
        <nav className={styles.nav}>
          <div className={styles.navTitle}>Города в области</div>
          <ul>
            <li>
              <Link href='#'>Ейск</Link>
            </li>
            <li>
              <Link href='#'>Кропоткин</Link>
            </li>
            <li>
              <Link href='#'>Тихорецк</Link>
            </li>
            <li>
              <Link href='#'>Приморско-Ахтарск</Link>
            </li>
            <li>
              <Link href='#'>Гулькевичи</Link>
            </li>
            <li>
              <Link href='#'>Темрюк</Link>
            </li>
            <li>
              <Link href='#' className={styles.all}>
                Все города
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.nav}>
          <div className={styles.navTitle}>Города в области</div>
          <ul>
            <li>
              <Link href='#'>Ейск</Link>
            </li>
            <li>
              <Link href='#'>Кропоткин</Link>
            </li>
            <li>
              <Link href='#'>Тихорецк</Link>
            </li>
            <li>
              <Link href='#'>Приморско-Ахтарск</Link>
            </li>
            <li>
              <Link href='#'>Гулькевичи</Link>
            </li>
            <li>
              <Link href='#'>Темрюк</Link>
            </li>
            <li>
              <Link href='#' className={styles.all}>
                Все города
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.nav}>
          <div className={styles.navTitle}>Города в области</div>
          <ul>
            <li>
              <Link href='#'>Ейск</Link>
            </li>
            <li>
              <Link href='#'>Кропоткин</Link>
            </li>
            <li>
              <Link href='#'>Тихорецк</Link>
            </li>
            <li>
              <Link href='#'>Приморско-Ахтарск</Link>
            </li>
            <li>
              <Link href='#'>Гулькевичи</Link>
            </li>
            <li>
              <Link href='#'>Темрюк</Link>
            </li>
            <li>
              <Link href='#' className={styles.all}>
                Все города
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.nav}>
          <div className={styles.navTitle}>Города в области</div>
          <ul>
            <li>
              <Link href='#'>Ейск</Link>
            </li>
            <li>
              <Link href='#'>Кропоткин</Link>
            </li>
            <li>
              <Link href='#'>Тихорецк</Link>
            </li>
            <li>
              <Link href='#'>Приморско-Ахтарск</Link>
            </li>
            <li>
              <Link href='#'>Гулькевичи</Link>
            </li>
            <li>
              <Link href='#'>Темрюк</Link>
            </li>
            <li>
              <Link href='#' className={styles.all}>
                Все города
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.nav}>
          <div className={styles.navTitle}>Города в области</div>
          <ul>
            <li>
              <Link href='#'>Ейск</Link>
            </li>
            <li>
              <Link href='#'>Кропоткин</Link>
            </li>
            <li>
              <Link href='#'>Тихорецк</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.nav}>
          <div className={styles.navTitle}>Города в области</div>
          <ul>
            <li>
              <Link href='#'>Ейск</Link>
            </li>
            <li>
              <Link href='#'>Кропоткин</Link>
            </li>
            <li>
              <Link href='#'>Тихорецк</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.nav}>
          <div className={styles.navTitle}>Города в области</div>
          <ul>
            <li>
              <Link href='#'>Ейск</Link>
            </li>
            <li>
              <Link href='#'>Кропоткин</Link>
            </li>
            <li>
              <Link href='#'>Тихорецк</Link>
            </li>
          </ul>
        </nav>
      </SimpleGrid>
    </Container>
    <Container size={1200}>
      <nav className={styles.nav2}>
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
      <nav className={styles.nav2}>
        <ul>
          <li>ООО "СдамПродам"</li>
          <li>Проект компании ЦРОН</li>
        </ul>
      </nav>
    </Container>
  </div>
);
