import Image from "next/image";

export default function CardPoint({ text }: { text: string }) {
  return (
    <div className="flex gap-5 align-middle">
      <Image
        className="object-contain"
        src="/images/pricing/tick.png"
        alt="check"
        width={20}
        height={20}
      />
      <p className="text-secondary font-inter text-sm">{text}</p>
    </div>
  );
}
