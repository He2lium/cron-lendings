import { Comission } from './_components/Comission/Comission';
import { EstateIssues } from './_components/EstateIssues/EstateIssues';
import { FooterBanners } from './_components/FooterBanners/FooterBanners';
import { HowItWorks } from './_components/HowItWorks/HowItWorks';
import { Safety } from './_components/Safety/Safety';
import { TitleBanner } from './_components/TitleBanner/TitleBanner';

export default function AgencyPage() {
  return (
    <>
      <TitleBanner />
      <Comission />
      <EstateIssues />
      <Safety />
      <HowItWorks />
      <FooterBanners />
    </>
  );
}
