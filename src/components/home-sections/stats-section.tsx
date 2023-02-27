import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import NbCard from "../nbCard";
import CurveHeader from "../curve-header";

export default function Stats() {
  const size = useWindowSize();
  return (
    <div className="mt-16 flex flex-col items-center relative bg-primary">
      <CurveHeader
        width={size.width}
        title="What The Numbers Say"
        curve="/images/stats/curve.svg"
        mobileCurve="/images/stats/mobile-curve.svg"
        titleColor="secondary"
      />
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
