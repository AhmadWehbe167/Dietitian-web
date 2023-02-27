import Image from "next/image";

export default function CurveHeader({
  width,
  mobileCurve,
  curve,
  title,
  titleColor,
}: {
  width: number;
  mobileCurve: string;
  curve: string;
  title: string;
  titleColor: string;
}) {
  return (
    <>
      {width < 768 ? (
        <Image
          className="w-full"
          src={mobileCurve}
          alt="curve"
          width={1400}
          height={200}
        />
      ) : (
        <Image
          className="w-full"
          src={curve}
          alt="curve"
          width={1400}
          height={200}
        />
      )}
      <h1
        className={"absolute top-0 title px-8 md:px-20 z-20 text-" + titleColor}
      >
        {title}
      </h1>
    </>
  );
}
