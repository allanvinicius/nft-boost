import CardCollector from "@/components/cardCollectors";
import ContainerGrid from "@/components/container";
import imageNft from "@/assets/img-nft/01.jpg";
import imageNft02 from "@/assets/img-nft/02.jpg";

export default function Home() {
  return (
    <>
      <section>
        <ContainerGrid>
          <CardCollector
            number={1}
            image={imageNft}
            name="Lorem Ipsum"
            price="0.721"
            percentage="+20%"
          />

          <CardCollector
            number={2}
            image={imageNft02}
            name="Lorem Ipsum"
            price="0.721"
            percentage="+30%"
          />
        </ContainerGrid>
      </section>
    </>
  );
}
