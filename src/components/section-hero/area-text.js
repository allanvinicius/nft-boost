"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";

import playStore from "@/assets/google.svg";
import appleStore from "@/assets/apple.svg";
import doubleNft from "@/assets/double-nft.png";
import nftSmall from "@/assets/nft-small.png";
import iconBoost from "@/assets/icon-boost.svg";

export default function AreaText() {
  const areaTextRef = useRef(null);
  const googleRef = useRef(null);
  const appleRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const areaText = areaTextRef.current;
    const google = googleRef.current;
    const apple = appleRef.current;
    const circle = circleRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      areaText,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "start"
    )
      .fromTo(
        google,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        },
        ">-0.5"
      )
      .fromTo(
        apple,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1 },
        ">-1"
      )
      .fromTo(
        circle,
        {
          opacity: 0,
          xPercent: 90,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 1,
        },
        "start+=0.7"
      );
  }, []);

  return (
    <>
      <div ref={areaTextRef} className="flex flex-col items-center opacity-0">
        <div className="flex items-center justify-center gap-4 mb-3">
          <Image src={iconBoost} alt="icon" />
          <span className="font-inter text-sm @tablet:text-xl @desktop:text-xl">
            Adentre um reino de possibilidades infinitas
          </span>
        </div>

        <h1 className="font-poppins font-bold text-h1Mobile/normal text-center @desktop:text-7xl/normal">
          Explore um Universo
          <div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full  @desktop:w-32 w-24">
            <Image
              src={nftSmall}
              alt="nft"
              ref={circleRef}
              className="w-11 @desktop:w-auto opacity-0"
            />
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
      </div>

      <ul className="flex flex-col items-center gap-4 @tablet:flex-row">
        <li>
          <Link href={""}>
            <Image
              src={playStore}
              alt="playStore"
              ref={googleRef}
              className="opacity-0"
            />
          </Link>
        </li>

        <li>
          <Link href={""}>
            <Image
              src={appleStore}
              alt="appleStore"
              ref={appleRef}
              className="opacity-0"
            />
          </Link>
        </li>
      </ul>
    </>
  );
}
