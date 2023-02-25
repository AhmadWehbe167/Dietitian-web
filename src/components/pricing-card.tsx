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
}: {
  planName: string;
  planPrice: number;
  planPoints: string[];
  buttonText: string;
  svg: string;
  color: string;
  onClick: MouseEventHandler;
  followUpPrice?: number;
}) {
  return (
    <div className="flex flex-col mx-auto align-middle bg-white h-auto w-full pt-5 gap-5 rounded-3xl overflow-hidden max-w-sm">
      <p
        className={`text-secondary text-center font-inter text-xl font-extrabold border-b-4 border-${color} mx-auto`}
      >
        {planName}
      </p>
      <div className="flex flex-col">
        <p className="text-secondary text-6xl font-bold mx-auto">
          ${planPrice}
        </p>
        <p className="text-gray-500 font-inter mx-auto">per session</p>
        {followUpPrice !== undefined ? (
          <p className="text-gray-500 font-inter mx-auto">
            + ${followUpPrice} / follow up
          </p>
        ) : null}
      </div>
      <div className="flex flex-col px-7 gap-3">
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
          className="absolute bottom-5 bg-white px-7 py-2 rounded-2xl text-primary font-inter font-bold"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
