import SectionCarrousel from "@/components/section-carrousel";
import SectionHero from "@/components/section-hero";

import thumb01 from "@/assets/img-nft/01.jpg";
import thumb02 from "@/assets/img-nft/02.jpg";
import thumb03 from "@/assets/img-nft/03.jpg";
import thumb04 from "@/assets/img-nft/04.jpg";
import thumb05 from "@/assets/img-nft/05.jpg";
import thumb06 from "@/assets/img-nft/06.jpg";
import thumb07 from "@/assets/img-nft/07.jpg";
import thumb08 from "@/assets/img-nft/08.jpg";
import thumb09 from "@/assets/img-nft/09.jpg";
import thumb10 from "@/assets/img-nft/10.jpg";
import thumb11 from "@/assets/img-nft/11.jpg";
import thumb12 from "@/assets/img-nft/12.jpg";
import SectionCollectors from "@/components/section-collectors";

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
];

const featuredEmphasis = [
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
  {
    name: "Cat #221",
    thumb: thumb07,
    price: "0.0721",
    price_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumb: thumb08,
    price: "0.0721",
    price_brl: "602,02",
  },
];

const featuredTendencies = [
  {
    name: "Cat #221",
    thumb: thumb09,
    price: "0.0721",
    price_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumb: thumb10,
    price: "0.0721",
    price_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumb: thumb11,
    price: "0.0721",
    price_brl: "602,02",
  },
  {
    name: "Cat #221",
    thumb: thumb12,
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
        data={featuredEmphasis}
      />

      <SectionCollectors />

      <SectionCarrousel
        title="Tendências"
        subtitle="Em Tendência"
        data={featuredTendencies}
      />
    </>
  );
}
