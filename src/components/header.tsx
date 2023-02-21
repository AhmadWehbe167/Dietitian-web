import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleClose() {
    setIsMenuOpen(false);
  }

  return (
    <div className="flex justify-start items-center relative text-secondary md:justify-between">
      <Image
        className="absolute h-auto md:hidden"
        src="/icons/menu.png"
        alt="menu-icon"
        width={30}
        height={30}
        onClick={toggleOpen}
      />

      <div className="flex justify-center items-center gap-2 m-auto md:m-0">
        <Image
          src="/logo.jpeg"
          alt="logo"
          width={40}
          height={40}
          className="h-auto w-auto"
        />
        <p className="font-inter font-black text-xl">Dietitian</p>
      </div>

      <ul
        className={
          (!isMenuOpen ? "invisible " : "") +
          "absolute flex flex-col gap-5 font-inter top-14 md:visible md:flex-row md:relative md:top-0 lg:gap-10 lg:text-lg"
        }
      >
        <li
          className={
            "navLink " +
            (isMenuOpen ? "transform translate-x-0" : "") +
            "md:translate-x-0"
          }
        >
          <a href="#booking">Booking</a>
        </li>
        <li
          className={
            "navLink " +
            (isMenuOpen ? "transform translate-x-0" : "") +
            "md:translate-x-0"
          }
        >
          <a href="#plans">Plans</a>
        </li>
        <li
          className={
            "navLink " +
            (isMenuOpen ? "transform translate-x-0" : "") +
            "md:translate-x-0"
          }
        >
          <a href="#about">About</a>
        </li>
        <li
          className={
            "navLink " +
            (isMenuOpen ? "transform translate-x-0" : "") +
            "md:translate-x-0"
          }
        >
          <a href="#faq">FAQ</a>
        </li>
      </ul>

      <div className="btn hidden md:flex">
        <p className="text-white font-inter text-sm font-bold">Contact</p>
        <Image
          src="/icons/whatsapp.png"
          alt="whatsapp-icon"
          width={20}
          height={20}
          className="object-contain"
        />
      </div>
    </div>
  );
}
