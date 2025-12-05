import { Find } from './_components/Find/Find';
import { Safety } from './_components/Safety/Safety';
import { TitleBanner } from './_components/TitleBanner/TitleBanner';
import { WhatsCron } from './_components/WhatsCron/WhatsCron';
import { WhoWeAre } from './_components/WhoWeAre/WhoWeAre';

export default function AboutPage() {
  return (
    <>
      <TitleBanner />
      <WhoWeAre />
      <Find />
      <WhatsCron />
      <Safety />
    </>
  );
}
