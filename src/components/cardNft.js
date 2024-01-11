import Image from "next/image";
import iconHeart from "@/assets/icon-heart.svg";
import iconVerify from "@/assets/verify.svg";
import iconEth from "@/assets/icon-eth.svg";
import iconClock from "@/assets/icon-clock.svg";

export default function CardNft({ thumb, name, price, price_brl }) {
  return (
    <div className="w-full max-w-cardNft overflow-hidden rounded-2xl border border-card-nft bg-fav">
      <div className="relative w-full h-areaImageNft overflow-hidden">
        <Image src={thumb} alt="NFT" className="w-full h-full object-cover" />

        <div className="absolute top-2 right-2 z-10 flex items-center gap-2 py-3 px-6 rounded-full bg-fav border border-card-nft">
          <Image src={iconHeart} alt="icon heart" />
          <small className="font-semibold text-xs">0</small>
        </div>
      </div>

      <div className="w-full p-4">
        <h4 className="flex items-center gap-1 font-semibold text-xs mb-1">
          Cartoon Collection
          <Image src={iconVerify} alt="verify" />
        </h4>

        <h3 className="text-white font-semibold text-lg/none">{name}</h3>

        <div className="flex items-end justify-between mt-4">
          <div className="space-y-1">
            <span className="text-xs font-normal text-white text-opacity-70">
              Preço atual
            </span>

            <h3 className="flex items-center gap-1 font-semibold text-white text-lg">
              <Image src={iconEth} alt="eth" />
              {price} BTC
            </h3>
          </div>

          <h5 className="relative bottom-1 font-medium text-xs text-white">
            R$ {price_brl}
          </h5>
        </div>

        <button className="mt-4 bg-blue-primary w-full h-12 rounded-full text-sm text-white font-semibold hover:bg-blue-700 transition-all ease-linear">
          Buy now
        </button>

        <div className="flex items-center mt-4 gap-1">
          <Image src={iconClock} alt="clock" />
          <p className="text-xs font-normal text-white">Fim em 4h 8m 22s</p>
        </div>
      </div>
    </div>
  );
}
