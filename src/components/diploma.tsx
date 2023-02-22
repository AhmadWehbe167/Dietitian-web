import Image from "next/image";
export default function Diploma({
  icon,
  level,
  degree,
}: {
  icon: string;
  level: string;
  degree: string;
}) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Image
        className="w-16 object-contain"
        src={icon}
        alt="Diplome"
        width={100}
        height={100}
      />
      <div className="flex flex-col">
        <p className="font-inter text-sm text-center font-bold text-primary">
          {level}
        </p>
        <p className="font-inter text-base text-center text-secondary">
          {degree}
        </p>
      </div>
    </div>
  );
}
