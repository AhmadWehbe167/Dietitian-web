import Script from "next/script";
import styles from "../../assets/calendly.module.css";

export default function BookSection() {
  return (
    <div className="bg-primary py-5 flex flex-col gap-5 px-5">
      <h1 className="title text-white text-center">Book Your Session</h1>
      <p className="paragraph text-white text-center mini:text-lg lg:text-xl xl:text-2xl">
        Take the first step to change your life.
      </p>
      <div
        className={
          "calendly-inline-widget w-full overflow-hidden rounded-xl " +
          styles.customHeights
        }
        data-url="https://calendly.com/whbeagncy/test?text_color=3c4856&primary_color=5c96cc"
        // style={{}}
      ></div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </div>
  );
}
