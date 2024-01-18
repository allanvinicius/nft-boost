import Image from "next/image";
import Link from "next/link";
import ContainerGrid from "./container";
import logoNftBoost from "@/assets/logo.svg";
import iconHamburger from "@/assets/icon-hamburger.svg";

const itensNav = ["Download", "NFTs", "Rank", "FAQ"];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full py-6 @laptop:py-5">
      <ContainerGrid className="flex items-center justify-between">
        <Image src={logoNftBoost} alt="logo" className="max-w-logoMobile" />

        <div className="hidden @laptop:flex flex-1 items-center justify-between max-w-areaNav">
          <nav className="flex items-center gap-12">
            {itensNav.map((item, index) => (
              <Link
                key={index}
                href={""}
                className="font-medium font-inter hover:text-blue-primary transition-colors ease-linear"
              >
                {item}
              </Link>
            ))}
          </nav>

          <button className="bg-blue-primary py-4 px-7 rounded-full font-medium font-inter hover:bg-blue-900 transition-colors ease-linear">
            Conectar carteira
          </button>
        </div>

        <button className="w-10 h-10 flex items-center justify-center border rounded border-white border-opacity-5 bg-white bg-opacity-[0.03] @laptop:hidden">
          <Image src={iconHamburger} alt="mobile" />
        </button>
      </ContainerGrid>
    </header>
  );
}
