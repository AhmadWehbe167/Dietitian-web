import Image from "next/image";
import CurveHeader from "../curve-header";
import useWindowSize from "@/hooks/useWindowSize";
import ClientCard from "../client-card";

export default function ClientSection() {
  const size = useWindowSize();
  return (
    <div className="flex flex-col items-center relative bg-white">
      <CurveHeader
        width={size.width}
        title="Clients Feedback"
        curve="/images/clients-section/curve.svg"
        mobileCurve="/images/clients-section/mobile-curve.svg"
        titleColor="white"
      />
      <div className="relative w-full px-10 md:px-0 md:w-5/6 my-12 flex justify-center">
        {size.width > 768 ? (
          <ClientCard
            image="/images/clients-section/middle.png"
            text="I feel much better and healthier after only few weeks of starting."
            name="Celine Addy"
            age={22}
            classes="absolute left-0 scale-75 blur-sm"
          />
        ) : null}
        {size.width > 768 ? (
          <ClientCard
            image="/images/clients-section/right.png"
            text="I like the personalized meals. They helped fall in love with the process."
            name="Celine Addy"
            age={22}
            classes="absolute right-0 scale-75 blur-sm"
          />
        ) : null}
        <ClientCard
          image="/images/clients-section/middle.png"
          text="Over the past few months, I have seen a huge improvement in my overall health."
          name="John Doe"
          age={25}
        />
      </div>
    </div>
  );
}
