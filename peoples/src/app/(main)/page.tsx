'use client';

import { Footer, Header } from '@/widgets';
import { Counters } from './_components/Counters/Counters';
import { EstateDeals } from './_components/EstateDeals/EstateDeals';
import { FooterBanners } from './_components/FooterBanners/FooterBanners';
import { HowItWorks } from './_components/HowItWorks/HowItWorks';
import { Safety } from './_components/Safety/Safety';
import { TitleBanner } from './_components/TitleBanner/TitleBanner';

export default function Home() {
  return (
    <>
      <Header />
      <TitleBanner />
      <EstateDeals />
      <Safety />
      <HowItWorks />
      <Counters />
      <FooterBanners />
      <Footer />
    </>
  );
}
