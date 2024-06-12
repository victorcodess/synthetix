"use client";
import Image from "next/image";
import logo from "@/public/logo.svg";
import linkedIn from "@/public/linkedin.svg";
import twitter from "@/public/twitter.svg";
import facebook from "@/public/facebook.svg";
import { Content } from "@prismicio/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import Linker, { handleScroll } from "./linker";
import { AnimatePresence, motion } from "framer-motion";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

const Navbar = ({ settings }: NavbarProps) => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openNav]);
  
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
          delay: 1,
          ease: [0.44, 0, 0, 1],
        },
      }}
      className="relative mx-6 flex w-full flex-row-reverse items-center justify-between md:mx-12 md:flex-row lg:mx-16"
    >
      {openNav && (
        <div className="fixed right-0 top-0 flex h-[100vh] w-full flex-col items-center justify-start bg-[#100000]">
          <div
            style={{
              background:
                "radial-gradient(43.3% 50% at 50% 50%,var(--token-f62537b2-225f-4612-b5a7-10d588628663, rgba(255, 109, 0, .35)) 0%,var(--token-c92ed155-c13c-498b-9920-b8553fdbf57c, rgba(16, 0, 0, 1)) 100%)",
            }}
            className="absolute -left-[50%] right-0 top-0 -z-10 !mx-auto h-[800px] w-[200%] opacity-100 sm:-left-[0] sm:w-full"
          ></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.44, 0, 0, 1],
              },
            }}
            className="mt-[120px] flex h-[517px] w-full flex-col items-center justify-center gap-8 py-[88px] md:mt-[95px] md:h-[567px] md:gap-9 md:!py-[64px]"
          >
            {settings.data.navigation.map((item) => (
              <h4
                key={item.label}
                className="text-[28px] leading-[30.24px] tracking-[-0.8px] text-white opacity-50 transition-all hover:opacity-100 md:text-[40px] md:leading-[43.2px]"
                onClick={() => setOpenNav(false)}
              >
                <PrismicNextLink
                  field={item.link}
                  className="text-center"
                  onClick={handleScroll}
                >
                  {item.label}
                </PrismicNextLink>
              </h4>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.2,
                delay: 0.1,
                ease: [0.44, 0, 0, 1],
              },
            }}
            className="absolute bottom-[42px] left-0 right-0 mx-auto flex h-[20px] w-max items-center justify-around gap-[30px] md:bottom-[45px] md:gap-[34px]"
          >
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
          </motion.div>
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

      <Link
        href={"/#contact-us"}
        onClick={handleScroll}
        className="hidden rounded-full bg-gradient-to-b from-white/[5%] to-white/[15%] px-7 py-4 text-base leading-[23.04px] tracking-[-0.16px] text-white outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] hover:bg-white/[12%] md:block"
      >
        Contact Us
      </Link>

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
    </motion.nav>
  );
};

export default Navbar;
