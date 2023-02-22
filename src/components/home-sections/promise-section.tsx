import Image from "next/image";
import PromiseCard from "../promise-card";

export default function PromiseSection() {
  return (
    <div className="text-secondary flex flex-col gap-10 items-center mt-10 xl:gap-14 xl:mb-10">
      <h1 className="title">
        My <span className="text-primary">Promise</span> To You
      </h1>
      <p className="paragraph text-center md:max-w-md lg:max-w-3xl">
        Unlock Your Body Full Potential with Our Comprehensive Nutrition
        Services: Customized Meal Plans, Expert Counseling, and Specialized
        Programs.
      </p>
      <div className="flex flex-col gap-10 md:flex-row">
        <PromiseCard
          image="/images/promise-section/diet.png"
          text="Personalized Nutrition"
        />
        <PromiseCard
          image="/images/promise-section/support.png"
          text="Expert Guidance & Support"
          classes="flex-row-reverse"
        />
        <PromiseCard
          image="/images/promise-section/health.png"
          text="Improved Health & Well Being"
        />
        <PromiseCard
          image="/images/promise-section/goals.png"
          text="Goals Achievement"
          classes="flex-row-reverse"
        />
      </div>
    </div>
  );
}
