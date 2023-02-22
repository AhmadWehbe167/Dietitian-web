import Image from "next/image";
import { MouseEventHandler } from "react";

export default function SButton({
  text,
  handleClick,
  icon,
  classes,
}: {
  text: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  classes?: string;
}) {
  return (
    <>
      <button
        className={"shadow-md btn md:flex " + classes}
        onClick={handleClick}
      >
        <p
          unselectable="on"
          className="text-white font-inter text-sm font-bold tracking-wider"
        >
          {text}
        </p>
        {icon ? (
          <Image
            src={icon}
            alt="whatsapp-icon"
            width={20}
            height={20}
            className="object-contain"
          />
        ) : null}
      </button>
    </>
  );
}
