import Image from "next/image";
import iconVerify from "@/assets/verify.svg";
import iconEth from "@/assets/icon-eth.svg";

export default function CardCollector({
  number,
  image,
  name,
  price,
  percentage,
}) {
  return (
    <div className="bg-white bg-opacity-[0.01] py-4 px-6 flex items-center justify-between rounded-full border border-white border-opacity-5 w-full max-w-cardCollector">
      <div className="flex items-center gap-6">
        <strong className="font-semibold">{number}</strong>

        <div className="flex items-center gap-4">
          <div className="relative w-10 h-10">
            <div className="w-full h-full border-2 border-white border-opacity-[0.04] rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src={image}
                alt="nft"
                className="w-full h-full object-cover"
              />
            </div>

            <Image
              src={iconVerify}
              alt="verify"
              className="absolute -bottom-1 right-0"
            />
          </div>

          <div className="space-y-1">
            <h4 className="font-semibold">{name}</h4>
            <p className="flex items-center gap-1 text-sm text-white text-opacity-70">
              Preço mínimo
              <span className="flex items-center gap-1 font-semibold text-sm text-white">
                <Image src={iconEth} alt="eth" />
                {price} BTC
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-1 text-right">
        <strong className="text-green-primary text-sm font-bold">
          {percentage}
        </strong>

        <span className="flex items-center gap-1 font-semibold text-sm text-white">
          <Image src={iconEth} alt="eth" />
          0.721 BTC
        </span>
      </div>
    </div>
  );
}
