import { BottomBanner } from './_components/BottomBanner/BottomBanner';
import { FlatItems } from './_components/FlatItems/FlatItems';
import { TitleBanner } from './_components/TitleBanner/TitleBanner';

export default function HomePage() {
  return (
    <>
      <TitleBanner />
      <div style={{ marginBottom: '7rem' }}>
        <FlatItems
          title='Новостройки'
          banner={{
            title: 'Подбор новостроек',
            href: '#',
            img: 'url("/townhouse2.png")',
            btnText: 'Подробнее',
          }}
        />
        <FlatItems
          title='Купить квартиру'
          banner={{
            title: 'Оцените вашу квартиру',
            href: '#',
            img: 'url("/townhouse2.png")',
            btnText: 'Подробнее',
          }}
        />
        <FlatItems
          title='Снять квартиру'
          banner={{
            title: 'Сдать квартиру просто',
            href: '#',
            img: 'url("/townhouse2.png")',
            btnText: 'Разместить',
          }}
          reversed
        />
      </div>
      <BottomBanner />
    </>
  );
}
