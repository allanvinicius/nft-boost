import CardCollector from "../cardCollectors";
import ContainerGrid from "../container";
import TitleSection from "../title-section";

import thumb01 from "@/assets/img-nft/01.jpg";
import thumb02 from "@/assets/img-nft/02.jpg";
import thumb03 from "@/assets/img-nft/03.jpg";
import thumb04 from "@/assets/img-nft/04.jpg";
import thumb05 from "@/assets/img-nft/05.jpg";
import thumb06 from "@/assets/img-nft/06.jpg";
import thumb07 from "@/assets/img-nft/07.jpg";
import thumb08 from "@/assets/img-nft/08.jpg";

const collectors = [
  {
    image: thumb01,
    name: "Lorem Ipsum",
    price: "0.721",
    percentage: "+20%",
  },
  {
    image: thumb02,
    name: "Lorem Ipsum",
    price: "0.721",
    percentage: "+20%",
  },
  {
    image: thumb03,
    name: "Lorem Ipsum",
    price: "0.721",
    percentage: "+20%",
  },
  {
    image: thumb04,
    name: "Lorem Ipsum",
    price: "0.721",
    percentage: "+20%",
  },
  {
    image: thumb05,
    name: "Lorem Ipsum",
    price: "0.721",
    percentage: "+20%",
  },
  {
    image: thumb06,
    name: "Lorem Ipsum",
    price: "0.721",
    percentage: "+20%",
  },
  {
    image: thumb07,
    name: "Lorem Ipsum",
    price: "0.721",
    percentage: "+20%",
  },
  {
    image: thumb08,
    name: "Lorem Ipsum",
    price: "0.721",
    percentage: "+20%",
  },
];

export default function SectionCollectors() {
  return (
    <section className="py-10 @desktop:py-28">
      <ContainerGrid>
        <TitleSection
          subtitle="Colecionadores em Foco"
          title="Principais colecionadores"
        />

        <div className="grid grid-cols-1 @tablet:grid-cols-2 gap-x-4 @desktop:gap-x-8 gap-y-4">
          {collectors.map(({ image, name, price, percentage }, index) => (
            <CardCollector
              key={index}
              number={index + 1}
              image={image}
              name={name}
              price={price}
              percentage={percentage}
            />
          ))}
        </div>
      </ContainerGrid>
    </section>
  );
}
