import Image from "next/image";
import cardsLeft from "@/assets/cards-left.png";
import cardsRight from "@/assets/cards-right.png";

export default function CardsHero() {
  return (
    <div className="relative w-areaImageMobile @desktop:w-full h-areaImageMobile @desktop:h-areaImageDesktop mt-12 @desktop:mt-20">
      <Image
        src={cardsLeft}
        alt="nft"
        className="absolute top-0 left-8 @desktop:left-0 w-1/2 @desktop:w-auto z-10"
      />
      <Image
        src={cardsRight}
        alt="nft"
        className="absolute top-0 right-8 @desktop:right-0 w-1/2 @desktop:w-auto"
      />
    </div>
  );
}
