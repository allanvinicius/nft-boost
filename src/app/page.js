import ContainerGrid from "@/components/container";
import TitleSection from "@/components/titleSection";

export default function Home() {
  return (
    <>
      <section>
        <ContainerGrid>
          <TitleSection subtitle="Seleção Mensal" title="Destaque do Mês" />
        </ContainerGrid>
      </section>
    </>
  );
}
