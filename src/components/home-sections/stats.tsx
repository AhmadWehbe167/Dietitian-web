import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import NbCard from "../nbCard";

export default function Stats() {
  const size = useWindowSize();
  return (
    <div className="my-16 flex flex-col items-center relative bg-primary">
      {size.width < 768 ? (
        <Image
          className="w-full"
          src="/images/stats/mobile-curve.svg"
          alt="curve"
          width={1400}
          height={200}
        />
      ) : (
        <Image
          className="w-full"
          src="/images/stats/curve.svg"
          alt="curve"
          width={1400}
          height={200}
        />
      )}
      <h1 className="absolute top-0 title px-8 md:px-20 z-20">
        What The Numbers Say
      </h1>
      <div className="w-full p-8 py-16 md:px-20 flex flex-col md:flex-row items-center gap-10 md:gap-0">
        <div className="w-full flex flex-row items-center justify-between md:justify-around">
          <NbCard text="Happy Customers" number="1200" />
          <NbCard text="Packages Sold" number="700" />
        </div>
        <div className="w-full flex flex-row items-center justify-between md:justify-around">
          <NbCard text="People Engaged" number="27k" />
          <NbCard text="Weekly Growth" number="900" />
        </div>
      </div>
    </div>
  );
}
