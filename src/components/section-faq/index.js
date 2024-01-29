import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ContainerGrid from "../container";
import TitleSection from "../title-section";

const faq = [
  {
    question: "O que são NFTs?",
    answers: " Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Como funciona a compra de NFTs em seu site?",
    answers: " Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Como posso vender meus próprios NFTs?",
    answers: " Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Os NFTs são seguros e autênticos?",
    answers: " Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question:
      "Quais são as taxas envolvidas na compra e venda de NFTs em seu site?",
    answers: " Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

export default function SectionFaq() {
  return (
    <section className="pt-10 @desktop:pt-28">
      <ContainerGrid>
        <TitleSection
          subtitle="Desvendando os Mistérios dos NFTs"
          title="Perguntas frequentes"
        />

        <div>
          <Accordion type="single" collapsible className="w-full">
            {faq.map(({ question, answers }, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answers}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ContainerGrid>
    </section>
  );
}
