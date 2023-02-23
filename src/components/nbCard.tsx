import Image from "next/image";
export default function NbCard({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex flex-col gap-5 md:gap-10 relative items-center w-28 mini:w-32">
      <div className="flex justify-center items-center w-full h-28 mini:h-32 relative rounded-3xl overflow-hidden border-x border-y border-cyan-50 shadow-lg">
        <Image
          className="absolute top-0 left-0 w-full h-full opacity-30"
          src="/images/stats/card-bg.jpg"
          alt="1"
          width={100}
          height={100}
        />
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-gradient-to-br from-blue-200 to-blue-500"></div>
        <p className="text-white text-3xl drop-shadow-md font-inter">
          {number}
        </p>
      </div>
      <p className="mark-text text-white text-center w-full text-xl lg:text-2xl">
        {text}
      </p>
    </div>
  );
}
