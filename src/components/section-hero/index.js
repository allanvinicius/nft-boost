import ContainerGrid from "../container";
import CardsHero from "./cards";

import AreaText from "./area-text";

export default function SectionHero() {
  return (
    <section className="pt-36 bg-heroBg bg-no-repeat overflow-hidden">
      <ContainerGrid className="flex flex-col items-center">
        <AreaText />

        <CardsHero />

        <div className="w-full border-t border-white border-opacity-[0.08] mt-10 @desktop:mt-36"></div>
      </ContainerGrid>
    </section>
  );
}
