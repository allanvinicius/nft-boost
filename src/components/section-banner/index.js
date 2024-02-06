"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ContainerGrid from "../container";

import playStore from "@/assets/google.svg";
import appleStore from "@/assets/apple.svg";

export default function SectionBanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;

    gsap.fromTo(
      banner,
      {
        opacity: 0,
        scale: 0.7,
      },
      {
        opacity: 1,
        scale: 1,
        ease: "power3.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: banner,
          start: "top-=100% center",
        },
      }
    );
  }, []);

  return (
    <section className="py-10 @desktop:py-28" ref={bannerRef}>
      <ContainerGrid>
        <div className="bg-bannerBg bg-no-repeat bg-cover rounded-2xl overflow-hidden px-3 py-10 @desktop:px-28 @desktop:py-20 flex flex-col items-center">
          <h2 className="font-poppins font-bold text-titleBannerMobile @desktop:text-titleBanner/normal text-center max-w-titleBanner">
            Abra as Portas para a Próxima Revolução Digital!
          </h2>

          <p className="font-inter text-base @desktop:text-xl text-white text-opacity-85 text-center mt-4 mb-6 max-w-paragraphBanner">
            Descubra, Adquira e Possua os NFTs Mais Valiosos do Universo
            Digital. Sua Oportunidade, Sua História.
          </p>

          <ul className="flex flex-col items-center justify-center gap-6 @tablet:flex-row">
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
        </div>
      </ContainerGrid>
    </section>
  );
}
