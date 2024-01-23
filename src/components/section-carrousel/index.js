import ContainerGrid from "../container";
import TitleSection from "../title-section";
import CarrouselCards from "./carrousel-cards";

export default function SectionCarrousel({ subtitle, title, data }) {
  return (
    <section className="pt-20 @desktop:pt-28">
      <ContainerGrid className="px-0 @desktop:px-3">
        <TitleSection subtitle={subtitle} title={title} />

        <CarrouselCards data={data} />
      </ContainerGrid>
    </section>
  );
}
