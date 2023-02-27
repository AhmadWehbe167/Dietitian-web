import Image from "next/image";
import { MouseEventHandler } from "react";
import CardPoint from "./card-point";

export default function PricingCard({
  planName,
  planPrice,
  planPoints,
  buttonText,
  svg,
  color,
  onClick,
  followUpPrice,
  classes,
}: {
  planName: string;
  planPrice: number;
  planPoints: string[];
  buttonText: string;
  svg: string;
  color: string;
  onClick: MouseEventHandler;
  followUpPrice?: number;
  classes?: string;
}) {
  return (
    <div
      className={
        "flex flex-col mx-auto md:mx-0 align-middle bg-white h-auto w-full max-w-xs md:max-w-250 pt-5 gap-5 rounded-3xl overflow-hidden " +
        (classes !== undefined ? classes : "")
      }
    >
      <p
        className={`text-secondary text-center font-inter text-xl font-extrabold border-b-4 border-${color} mx-auto md:text-base`}
      >
        {planName}
      </p>
      <div className="flex flex-col">
        <p className="text-secondary text-6xl font-bold mx-auto md:text-4xl">
          ${planPrice}
        </p>
        <p className="text-gray-500 font-inter mx-auto md:text-xs">
          per session
        </p>
        {followUpPrice !== undefined ? (
          <p className="text-gray-500 font-inter mx-auto md:text-xs">
            + ${followUpPrice} / follow up
          </p>
        ) : null}
      </div>
      <div className="flex flex-col px-8 md:px-6 gap-1">
        {planPoints.map((e) => {
          return <CardPoint key={e} text={e} />;
        })}
      </div>
      <div className="flex justify-center align-middle relative mt-auto">
        <Image
          className="w-full object-contain"
          src={svg}
          alt="free"
          width={200}
          height={200}
        />
        <button
          onClick={onClick}
          className="absolute bottom-3 bg-white px-7 py-2 rounded-2xl text-primary font-inter font-bold text-sm"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
