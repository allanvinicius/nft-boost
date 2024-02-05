"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import cardsLeft from "@/assets/cards-left.png";
import cardsRight from "@/assets/cards-right.png";

export default function CardsHero() {
  const areaCardRef = useRef(null);
  const cardLeftRef = useRef(null);
  const cardRightRef = useRef(null);

  useEffect(() => {
    const areaCard = areaCardRef.current;
    const cardLeft = cardLeftRef.current;
    const cardRight = cardRightRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: areaCard,
        start: "-=50% center",
        scrub: true,
      },
    });

    

    tl.to(cardLeft, {
      left: 0,
    }).to(
      cardRight,
      {
        right: 0,
      },
      0
    );
  }, []);

  return (
    <div
      className="relative w-areaImageMobile @desktop:w-full h-areaImageMobile @desktop:h-areaImageDesktop mt-12 @desktop:mt-20"
      ref={areaCardRef}
    >
      <Image
        src={cardsLeft}
        alt="nft"
        className="absolute top-0 left-8 @desktop:left-[25%] w-1/2 @desktop:w-auto z-10"
        ref={cardLeftRef}
      />
      <Image
        src={cardsRight}
        alt="nft"
        className="absolute top-0 right-8 @desktop:right-[25%] w-1/2 @desktop:w-auto"
        ref={cardRightRef}
      />
    </div>
  );
}
