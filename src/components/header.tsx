import { useState } from "react";
import Image from "next/image";
import SButton from "./button";
import { useRouter } from "next/router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  function toggleOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleClose() {
    setIsMenuOpen(false);
  }

  return (
    <div className="flex justify-start items-center relative text-secondary z-50 md:justify-between animate-slide-in-top">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="absolute h-auto md:hidden"
        src="/icons/menu.png"
        alt="menu-icon"
        width={30}
        height={30}
        onClick={toggleOpen}
      />

      <div className="flex justify-center items-center gap-2 m-auto md:m-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.jpeg" alt="logo" className="h-auto w-12" />
        <p className="font-inter font-black text-xl">Dietitian</p>
      </div>

      <ul
        className={
          (!isMenuOpen ? "invisible " : "") +
          "py-3 z-50 absolute flex flex-col gap-5 font-inter top-14 w-full bg-white md:w-auto md:visible md:flex-row md:relative md:top-0 lg:gap-10 lg:text-lg"
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

      <SButton
        text="Contact"
        classes="hidden md:flex"
        icon="/icons/whatsapp.png"
        handleClick={() => {
          router.push("https://wa.me/96170693927");
        }}
      />
    </div>
  );
}
