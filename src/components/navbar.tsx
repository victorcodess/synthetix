"use client";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { Content } from "@prismicio/client";
import Link from "next/link";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

const Navbar = ({ settings }: NavbarProps) => {
  return (
    <nav className="relative mx-6 md:mx-12 lg:mx-16 flex w-full items-center justify-between flex-row-reverse md:flex-row">
      <div className="flex h-[54px] w-[54px] cursor-pointer flex-col items-center justify-center gap-1 rounded-full bg-gradient-to-b from-white/[5%] to-white/[15%] outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-white/[12%]">
        <div className="min-h-[2px] w-[15px] rounded-full bg-white" />
        <div className="min-h-[2px] w-[15px] rounded-full bg-white" />
        <div className="min-h-[2px] w-[15px] rounded-full bg-white" />
      </div>
      <a
        href="/"
        className="absolute left-0 right-0 top-0 mx-auto md:flex w-min items-center justify-center hidden"
      >
        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-gradient-to-b from-[#ff6d00]/10 to-[#ff6d00]/[50%] outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-[#ff6d00]/70">
          <Image
            src={logo}
            alt="logo"
            width={300}
            height={300}
            className="h-6 w-6"
          />
        </div>
        <span className="sr-only">Synthetix Home Page</span>
      </a>

      <button className="hidden md:block rounded-full bg-gradient-to-b from-white/[5%] to-white/[15%] px-7 py-4 text-base leading-[23.04px] tracking-[-0.16px] text-white outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] hover:bg-white/[12%]">
        Contact Us
      </button>

      <a
        href="/"
        className="flex w-min items-center justify-center md:hidden"
      >
        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-gradient-to-b from-[#ff6d00]/10 to-[#ff6d00]/[50%] outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-[#ff6d00]/70">
          <Image
            src={logo}
            alt="logo"
            width={300}
            height={300}
            className="h-6 w-6"
          />
        </div>
        <span className="sr-only">Synthetix Home Page</span>
      </a>
    </nav>
  );
};

export default Navbar;
