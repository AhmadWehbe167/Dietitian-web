import Image from "next/image";

export default function LocationIcon({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <Image
        className="w-13 h-14 object-contain relative top-1"
        src={icon}
        alt="icon"
        width={100}
        height={100}
      />
      <p className="text-gray-500 text-sm text-center font-inter">{text}</p>
    </div>
  );
}
