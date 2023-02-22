import Image from "next/image";
import SButton from "./button";
import { useRouter } from "next/router";

export default function HeroSection() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col gap-6 items-center">
        <div className="w-10/12 relative max-w-sm m-auto mt-3">
          <Image src="/images/dr.png" alt="doctor" width={400} height={400} />
          <Image
            className="absolute bottom-0 right-0 animate-right-floating mb:w-44"
            src="/images/phone.png"
            alt="doctor"
            width={120}
            height={120}
          />
          <Image
            className="absolute bottom-0 left-0 animate-left-floating mb:w-44"
            src="/images/engaged.png"
            alt="doctor"
            width={120}
            height={120}
          />
        </div>

        <div className="gap-2 hidden md:flex">
          <Image
            className="object-contain"
            src="/icons/circles.png"
            alt="small-circles"
            width={34}
            height={18}
          />
          <p className="font-inter text-secondary">WELCOME</p>
        </div>

        <h1 className="font-inter text-4xl font-bold text-center text-secondary">
          Healther <span className="text-primary">Choices</span> For A Healthier{" "}
          <span className="text-primary">You</span>
        </h1>

        <p className="text-secondary text-center font-sans">
          Get evidence-based advice and personalized dietry recommendations to
          help you meet your goals.
        </p>
        <SButton
          text="Book Now!"
          classes="rounded-3xl"
          handleClick={() => {
            router.push("#booking");
          }}
        />
      </div>
    </>
  );
}
