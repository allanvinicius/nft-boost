import Image from "next/image";
import Link from "next/link";
import ContainerGrid from "../container";
import CardsHero from "./cards";

import iconBoost from "@/assets/icon-boost.svg";
import playStore from "@/assets/google.svg";
import appleStore from "@/assets/apple.svg";
import doubleNft from "@/assets/double-nft.png";
import nftSmall from "@/assets/nft-small.png";


export default function SectionHero() {
  return (
    <section className="pt-36 bg-heroBg bg-no-repeat overflow-hidden">
      <ContainerGrid className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 mb-3">
          <Image src={iconBoost} alt="icon" />
          <span className="font-inter text-sm @tablet:text-xl @desktop:text-xl">
            Adentre um reino de possibilidades infinitas
          </span>
        </div>

        <h1 className="font-poppins font-bold text-h1Mobile/normal text-center @desktop:text-7xl/normal">
          Explore um Universo
          <div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full  @desktop:w-32 w-24">
            <Image src={nftSmall} alt="nft" className="w-11 @desktop:w-auto" />
          </div>
          Digital de
          <Image
            src={doubleNft}
            alt="doubleNft"
            className="inline-block @desktop:w-auto w-16 mx-2"
          />
          Colecionáveis Únicos!
        </h1>

        <p className="w-full font-inter text-sm mt-3 @desktop:text-xl @desktop:max-w-paragraphHero @tablet:text-base text-center text-white text-opacity-85 mb-6 @desktop:mb-9 ">
          Adentre um reino de possibilidades infinitas e mergulhe nas coleções
          de NFT, onde a arte, a cultura e a inovação se unem para criar
          experiências verdadeiramente exclusivas.
        </p>

        <ul className="flex flex-col items-center gap-4 @tablet:flex-row">
          <li>
            <Link href={""}>
              <Image src={playStore} alt="playStore" />
            </Link>
          </li>

          <li>
            <Link href={""}>
              <Image src={appleStore} alt="appleStore" />
            </Link>
          </li>
        </ul>

        <CardsHero />

        <div className="w-full border-t border-white border-opacity-[0.08] mt-10 @desktop:mt-36"></div>
      </ContainerGrid>
    </section>
  );
}
