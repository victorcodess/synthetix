"use client";
import Image from "next/image";
import logo from "@/public/logo.svg";
import linkedIn from "@/public/linkedin.svg";
import twitter from "@/public/twitter.svg";
import facebook from "@/public/facebook.svg";
import { Content } from "@prismicio/client";
import Link from "next/link";
import { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import Linker from "./linker";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

const Navbar = ({ settings }: NavbarProps) => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="relative mx-6 flex w-full flex-row-reverse items-center justify-between md:mx-12 md:flex-row lg:mx-16">
      {openNav && (
        <div className="fixed right-0 top-0 flex h-[100vh] w-full flex-col items-center justify-start bg-[#100000]">
          <div
            style={{
              background:
                "radial-gradient(43.3% 50% at 50% 50%,var(--token-f62537b2-225f-4612-b5a7-10d588628663, rgba(255, 109, 0, .35)) 0%,var(--token-c92ed155-c13c-498b-9920-b8553fdbf57c, rgba(16, 0, 0, 1)) 100%)",
            }}
            className="absolute -left-[50%] right-0 top-0 -z-10 !mx-auto h-[800px] w-[200%] opacity-100 sm:-left-[0] sm:w-full"
          ></div>

          <div className="mt-[120px] md:mt-[95px] flex h-[517px] md:h-[567px] w-full flex-col items-center justify-center gap-8 md:gap-9 py-[88px] md:!py-[64px]">
            {settings.data.navigation.map((item) => (
              <h4
                key={item.label}
                className="text-[28px] leading-[30.24px] md:text-[40px] md:leading-[43.2px] tracking-[-0.8px] text-white opacity-50 transition-all hover:opacity-100"
                onClick={() => setOpenNav(false)}
              >
                <PrismicNextLink field={item.link} className="text-center">
                  {item.label}
                </PrismicNextLink>
              </h4>
            ))}
          </div>

          <div className="absolute bottom-[42px] md:bottom-[45px] left-0 right-0 mx-auto flex h-[20px] w-max gap-[30px] md:gap-[34px] items-center justify-around">
            <a
              href="https://www.linkedin.com/"
              className="opacity-50 transition-all hover:opacity-100"
            >
              <Image
                src={linkedIn}
                alt="logo"
                width={300}
                height={300}
                className="min-h-5 max-w-5 md:min-h-6 md:max-w-6"
              />
            </a>
            <a
              href="https://www.twitter.com/"
              className="opacity-50 transition-all hover:opacity-100"
            >
              <Image
                src={twitter}
                alt="logo"
                width={300}
                height={300}
                className="min-h-5 max-w-5 md:min-h-6 md:max-w-6"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              className="opacity-50 transition-all hover:opacity-100"
            >
              <Image
                src={facebook}
                alt="logo"
                width={300}
                height={300}
                className="min-h-5 max-w-5 md:min-h-6 md:max-w-6"
              />
            </a>
          </div>
        </div>
      )}

      <div
        className="flex h-[54px] w-[54px] cursor-pointer flex-col items-center justify-center gap-1 rounded-full bg-gradient-to-b from-white/[5%] to-white/[15%] outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-white/[12%]"
        onClick={() => setOpenNav(!openNav)}
      >
        <div
          className={`min-h-[2px] w-[15px] rounded-full bg-white transition-all duration-500 ${openNav ? "-mb-1.5 rotate-45" : ""}`}
        />
        <div
          className={`min-h-[2px] w-[15px] rounded-full bg-white transition-all duration-300 ${openNav ? "opacity-0" : ""}`}
        />
        <div
          className={`min-h-[2px] w-[15px] rounded-full bg-white transition-all duration-500 ${openNav ? "-mt-1.5 -rotate-45" : ""}`}
        />
      </div>
      <a
        href="/"
        className="absolute left-0 right-0 top-0 mx-auto hidden w-min items-center justify-center md:flex"
      >
        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-gradient-to-b from-[#ff6d00]/10 to-[#ff6d00]/[50%] outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-[#ff6d00]/60">
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

      <button className="hidden rounded-full bg-gradient-to-b from-white/[5%] to-white/[15%] px-7 py-4 text-base leading-[23.04px] tracking-[-0.16px] text-white outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] hover:bg-white/[12%] md:block">
        Contact Us
      </button>

      <a href="/" className="flex w-min items-center justify-center md:hidden">
        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-gradient-to-b from-[#ff6d00]/10 to-[#ff6d00]/[50%] outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-[#ff6d00]/60">
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
