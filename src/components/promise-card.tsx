import Image from "next/image";
export default function PromiseCard({
  image,
  text,
  classes,
}: {
  image: string;
  text: string;
  classes?: string;
}) {
  return (
    <div
      className={
        "flex gap-5 items-center justify-between w-full md:flex-col lg:justify-start " +
        classes
      }
    >
      <Image
        className="w-auto h-20 object-contain drop-shadow-md"
        src={image}
        alt="meal-icon"
        width={100}
        height={100}
      />
      <p className="mark-text">{text}</p>
    </div>
  );
}
