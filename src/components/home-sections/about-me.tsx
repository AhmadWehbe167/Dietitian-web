import Image from "next/image";
import Diploma from "../diploma";
import SButton from "../button";
import { useRouter } from "next/router";

export default function AboutMe() {
  const router = useRouter();
  return (
    <div className="flex flex-col my-10 gap-10 items-center">
      <h1 className="title text-center">About Me</h1>
      <div className="flex flex-col gap-5 items-center md:flex-row md:gap-16">
        <Image
          className="object-contain md:w-5/12"
          src="/images/about-me/profile.png"
          alt="Picture of the doctor"
          width={420}
          height={420}
        />
        <div className="flex flex-col gap-10 items-center md:items-start">
          <h2 className="subtitle">Hussein Nehme</h2>
          <p className="paragraph">
            I have a passion for translating complex nutritional concepts into
            practical and actionable advice that my clients can use to improve
            their health and well-being.
          </p>
          <div className="w-full flex justify-between">
            <Diploma
              icon="/images/about-me/bachelor.png"
              level="Bachelor In"
              degree="Biochemistry"
            />
            <Diploma
              icon="/images/about-me/masters.png"
              level="Master's In"
              degree="Pharmacy"
            />
            <Diploma
              icon="/images/about-me/bachelor.png"
              level="Bachelor In"
              degree="Nutrition"
            />
          </div>
          <SButton
            text="Book Now"
            classes="justify-center rounded-3xl md:w-44 md:rounded-lg"
            handleClick={() => {
              router.push("#booking");
            }}
          />
        </div>
      </div>
    </div>
  );
}
