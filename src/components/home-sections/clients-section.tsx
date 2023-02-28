import { useState } from "react";
import CurveHeader from "../curve-header";
import useWindowSize from "@/hooks/useWindowSize";
import ClientCard from "../client-card";
import reviews from "../../assets/data/reviews.json";

export default function ClientSection() {
  const [index, setIndex] = useState(1);
  const size = useWindowSize();
  const images = [
    "/images/clients-section/left.png",
    "/images/clients-section/middle.png",
    "/images/clients-section/right.png",
  ];

  function handleNext() {
    if (index < 2) {
      setIndex(index + 1);
    }
  }

  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
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
        {size.width > 768 && index > 0 ? (
          <ClientCard
            image={images[(index - 1) % images.length]}
            text={reviews[(index - 1) % images.length].review}
            name={reviews[(index - 1) % images.length].name}
            location={reviews[(index - 1) % images.length].location}
            index={index - 1}
            handlePrev={handlePrev}
            handleNext={handleNext}
            classes={"absolute left-0 scale-75 blur-sm"}
          />
        ) : null}
        {size.width > 768 && index < 2 ? (
          <ClientCard
            image={images[(index + 1) % images.length]}
            text={reviews[(index + 1) % images.length].review}
            name={reviews[(index + 1) % images.length].name}
            location={reviews[(index + 1) % images.length].location}
            index={index + 1}
            handlePrev={handlePrev}
            handleNext={handleNext}
            classes="absolute right-0 scale-75 blur-sm"
          />
        ) : null}
        <ClientCard
          image={images[index]}
          text={reviews[index].review}
          name={reviews[index].name}
          location={reviews[index].location}
          handlePrev={handlePrev}
          handleNext={handleNext}
          index={index}
        />
      </div>
    </div>
  );
}
