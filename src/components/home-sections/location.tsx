import Image from "next/image";
import LocationIcon from "../location-icon";
import SButton from "../button";

export default function LocationSection() {
  return (
    <div className="mt-16 flex flex-col items-center relative bg-white">
      <h1 className="title px-8 md:px-20 z-20 text-secondary">
        Visit Me In Person
      </h1>
      <div className="w-full p-8 py-16 md:px-20 xl:px-40 md:h-450 flex flex-col md:flex-row gap-16">
        <Image
          className="w-full md:w-1/2 xl:w-auto h-full object-cover"
          src="/images/location-section/location.png"
          alt="location"
          width={500}
          height={500}
        />
        <div className="flex flex-col h-full justify-between align-middle md:items-start gap-5">
          <h2 className="subtitle">In The Center</h2>
          <p className="text-gray-500 font-inter text-center text-base font-bold">
            For Those of You Who
          </p>
          <div className="flex w-full justify-between align-middle">
            <LocationIcon
              icon="/images/location-section/meeting.png"
              text="Prefer to meet and talk to me in person"
            />
            <LocationIcon
              icon="/images/location-section/package.png"
              text="Don't like online packages"
            />
            <LocationIcon
              icon="/images/location-section/center.png"
              text="Think it's important to visit"
            />
          </div>
          <SButton
            text="Contact Me"
            handleClick={() => {
              alert("implement me!");
            }}
            classes="justify-center"
          />
        </div>
      </div>
    </div>
  );
}
