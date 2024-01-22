import SectionCarrousel from "@/components/section-carrousel";
import SectionHero from "@/components/section-hero";

import thumb01 from "@/assets/img-nft/01.jpg";
import thumb02 from "@/assets/img-nft/02.jpg";
import thumb03 from "@/assets/img-nft/03.jpg";
import thumb04 from "@/assets/img-nft/04.jpg";
import thumb05 from "@/assets/img-nft/05.jpg";
import thumb06 from "@/assets/img-nft/06.jpg";

const featuredCollections = [
  {
    name: "Cat #221",
    thumb: thumb01,
    price: "0.0721",
    price_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumb: thumb02,
    price: "0.0721",
    price_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumb: thumb03,
    price: "0.0721",
    price_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumb: thumb04,
    price: "0.0721",
    price_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumb: thumb05,
    price: "0.0721",
    price_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumb: thumb06,
    price: "0.0721",
    price_brl: "602,02",
  },
];

export default function Home() {
  return (
    <>
      <SectionHero />

      <SectionCarrousel
        title="Coleções notáveis"
        subtitle="Destaque em Coleções"
        data={featuredCollections}
      />

      <SectionCarrousel
        title="Destaque do Mês"
        subtitle="Seleção Mensal"
        data={featuredCollections}
      />

      <SectionCarrousel
        title="Tendências"
        subtitle="Em Tendência"
        data={featuredCollections}
      />
    </>
  );
}
