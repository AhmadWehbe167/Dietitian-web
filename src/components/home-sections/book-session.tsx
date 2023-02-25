import Script from "next/script";
import styles from "../../assets/calendly.module.css";
import Image from "next/image";

export default function BookSection() {
  return (
    <div className="bg-primary py-5 flex flex-col gap-5 px-5 relative">
      <div className="invisible absolute flex justify-between align-middle top-0 left-0 w-full h-full z-0 lg:visible">
        <Image
          className="object-contain"
          src="/images/booking/left.png"
          alt="background"
          width={90}
          height={400}
        />
        <Image
          className="object-contain"
          src="/images/booking/right.png"
          alt="background"
          width={90}
          height={400}
        />
      </div>
      <h1 className="title text-white text-center">Book Your Session</h1>
      <p className="paragraph text-white text-center mini:text-lg lg:text-xl xl:text-2xl">
        Take the first step to change your life.
      </p>
      <div
        className={
          "z-10 calendly-inline-widget w-full overflow-hidden rounded-xl " +
          styles.customHeights
        }
        data-url="https://calendly.com/whbeagncy/test?text_color=3c4856&primary_color=5c96cc"
        // style={{}}
      ></div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </div>
  );
}
