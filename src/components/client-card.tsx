import Image from "next/image";

export default function ClientCard({
  image,
  text,
  name,
  age,
  classes,
}: {
  image: string;
  text: string;
  name: string;
  age: number;
  classes?: string;
}) {
  return (
    <div className={classes}>
      <div className="relative flex flex-col md:flex-row-reverse mx-auto md:mx-0 bg-gradient-to-b md:bg-gradient-to-l from-cardUpper to-cardLower h-auto w-full max-w-xs md:max-w-lg md:h-64 pt-5 pb-10 px-5 md:px-7 shadow-lg">
        <Image
          className="absolute -left-6 top-1/2 w-12 md:w-10 h-auto object-contain cursor-pointer"
          src="/images/clients-section/left-arrow.png"
          alt="free"
          width={100}
          height={100}
        />
        <Image
          className="absolute -right-6 top-1/2 w-12 md:w-10 h-auto object-contain cursor-pointer"
          src="/images/clients-section/right-arrow.png"
          alt="free"
          width={100}
          height={100}
        />
        <Image
          className="w-full h-auto object-contain"
          src={image}
          alt="free"
          width={400}
          height={400}
        />
        <div className="flex flex-col gap-5">
          <div className="relative mt-16 md:mt-5">
            <Image
              className="absolute -top-10 left-0 w-20 opacity-40 h-auto object-contain"
              src="/images/clients-section/quote.png"
              alt="free"
              width={400}
              height={400}
            />
            <p className="absolute top-0 left-2 text-base font-opensans text-secondary font-bold leading-8">
              {text}
            </p>
            <p className="invisible text-base font-opensans text-secondary font-bold tracking-wide leading-8">
              {text}
            </p>
          </div>
          <div className="relative left-2">
            <p className="text-base font-inter text-primary font-bold tracking-wide">
              {name}
            </p>
            <p className="text-sm font-inter text-gray-500">{age} years old</p>
          </div>
        </div>
      </div>
    </div>
  );
}
