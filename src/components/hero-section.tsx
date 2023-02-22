import Image from "next/image";
import SButton from "./button";
import { useRouter } from "next/router";

export default function HeroSection() {
  const router = useRouter();
  return (
    <>
      <div className="w-full justify-between flex flex-col gap-6 items-center md:flex-row-reverse md:mt-5 md:gap-0 lg:gap-22 xl:mt-10">
        <div className="w-10/12 relative max-w-sm m-auto mt-3 md:w-full animate-slide-in-right">
          <Image src="/images/dr.png" alt="doctor" width={400} height={400} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="absolute bottom-0 right-0 animate-right-floating mb:w-32 lg:w-44"
            src="/images/phone.png"
            alt="phone"
            width={120}
            height={120}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="absolute bottom-0 left-0 animate-left-floating mb:w-32 lg:w-44"
            src="/images/engaged.png"
            alt="phone"
            width={120}
            height={120}
          />
        </div>

        <div className="flex flex-col gap-6 items-center md:w-full md:items-start md:gap-4 lg:gap-6 xl:gap-12 xl:w-1/2 xl:pt-5 animate-slide-in-left">
          <div className="flex flex-col gap-1">
            <div className="gap-2 hidden md:flex">
              <Image
                className="object-contain"
                src="/icons/circles.png"
                alt="small-circles"
                width={25}
                height={18}
              />
              <p className="font-inter text-secondary text-sm md:text-base">
                WELCOME
              </p>
            </div>

            <h1 className="font-inter text-4xl font-bold text-center text-secondary md:text-start lg:text-6xl">
              Healther <span className="text-primary">Choices</span> For A
              Healthier <span className="text-primary">You</span>
            </h1>
          </div>

          <p className="text-secondary text-center font-sans md:text-start md:text-lg">
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
      </div>
    </>
  );
}
