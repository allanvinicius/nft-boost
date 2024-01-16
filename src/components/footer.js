import Image from "next/image";
import ContainerGrid from "./container";

import logoNFTBoost from "@/assets/logo.svg";
import Link from "next/link";

const footerNav = [
  {
    title: "NFT Boost®",
    items: ["Download", "NFTs", "Rank", "FAQ"],
  },
  {
    title: "Links importantes",
    items: ["About us", "Questions", "Press", "Contact us", "Legal"],
  },
];

export default function Footer() {
  return (
    <footer className="py-10 @laptop:pt-32 @laptop:pb-14">
      <ContainerGrid className="flex flex-col @laptop:flex-row justify-between gap-10 ">
        <div className="text-left max-w-full @laptop:max-w-leftContFooter">
          <Image src={logoNFTBoost} alt="logo" />
          <p className="mt-4 mb-6 text-lg text-white text-opacity-70">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>

          <button className="w-full @tablet:w-auto bg-blue-primary py-4 px-7 rounded-full font-medium font-inter hover:bg-blue-900 transition-colors ease-linear">
            Conectar carteira
          </button>
        </div>

        <div className="flex flex-col gap-10 @laptop:gap-20 @tablet:flex-row">
          {footerNav.map(({ title, items }) => (
            <div key={title}>
              <strong className="block text-xl mb-4">{title}</strong>

              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link href={""}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContainerGrid>
    </footer>
  );
}
