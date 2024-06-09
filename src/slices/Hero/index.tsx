"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import logoipsum from "../../public/logoipsum.png";
import logoo from "../../public/logoo.png";
import ipsum from "../../public/ipsum.png";
import ipsum2 from "../../public/ipsum2.png";
import ipsum3 from "../../public/ipsum3.png";
import ipsum4 from "../../public/ipsum4.png";
import ipsum5 from "../../public/ipsum5.png";
import Image from "next/image";
import Linker from "@/components/linker";
import { motion } from "framer-motion";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="hero"
      className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden p-4 px-6 pt-[174px] text-white min-[425px]:px-[42px] md:px-12 md:pt-[255px] xl:pb-[56px] xl:pt-[199px]"
    >
      <div
        style={{
          background:
            "radial-gradient(43.3% 50% at 50% 50%,var(--token-f62537b2-225f-4612-b5a7-10d588628663, rgba(255, 109, 0, .35)) 0%,var(--token-c92ed155-c13c-498b-9920-b8553fdbf57c, rgba(16, 0, 0, 1)) 100%)",
        }}
        className="absolute -left-[50%] right-0 top-0 !mx-auto h-[800px] w-[200%] opacity-100 sm:-left-[0] sm:w-full"
      ></div>

      <div className="relative flex w-full flex-col items-center justify-center gap-4 min-[425px]:w-[400px] md:w-full lg:w-[760px] xl:w-[1090px]">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="text-gradient mx-auto w-max rounded-full border border-white/[12%] px-4 py-2.5 text-[12px] leading-[17.28px] tracking-[0.72px]"
        >
          AI DATA PROCESSING
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="text-balance text-center text-[40px] leading-[43.2px] tracking-[-2px] md:text-[60px] md:leading-[64.8px] xl:text-[80px] xl:leading-[86.4px]"
        >
          <PrismicText field={slice.primary.heading} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="w-full pt-[12px] text-center text-[21px] leading-[30.24px] tracking-[-0.21px] md:w-[584px]"
        >
          <PrismicText field={slice.primary.body} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="mt-4 flex w-full flex-col items-center justify-center gap-2 md:flex-row"
        >
          <Linker
            field={slice.primary.contact_button}
            className="transition-some inline-flex w-full justify-center rounded-full bg-gradient-to-b from-[#ff6d00]/10 to-[#ff6d00]/[50%] px-7 py-4 text-base leading-[23.04px] tracking-[-0.16px] text-white outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] duration-300 hover:bg-[#ff6d00]/60 md:w-max"
          />
          <Linker
            field={slice.primary.services_button}
            className="transition-some inline-flex w-full justify-center rounded-full bg-gradient-to-b from-white/[5%] to-white/[15%] px-7 py-4 text-base leading-[23.04px] tracking-[-0.16px] text-white outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] duration-300 hover:!bg-[#fff]/[12%] md:w-max"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.2,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="mt-20 w-80 md:mt-28 md:w-96 xl:absolute xl:-left-[100px] xl:bottom-[216px] xl:mt-0 xl:w-72"
        >
          <PrismicNextImage priority field={slice.primary.image} className="xl:w-72" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.2,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="hidden xl:absolute xl:-right-[100px] xl:bottom-[216px] xl:mt-0 xl:block xl:w-72"
        >
          <PrismicNextImage field={slice.primary.image2} className="xl:w-72" />
        </motion.div>

        <div className="mb-12 mt-[120px] flex w-full flex-col items-center justify-center gap-8 md:mb-[56px] md:mt-[243px]">
          <h4 className="w-[240px] text-center text-[12px] font-medium leading-[17.28px] tracking-[0.72px] text-white sm:w-full">
            BUSINESSES RELY ON US FOR CONSUMER ENGAGEMENT
          </h4>
          <div className="-mr-20 flex w-full flex-wrap items-center justify-center gap-9 md:flex-nowrap md:gap-0">
            <Image
              src={logoipsum}
              alt=""
              className="transition-some mr-[42px] w-[117px] cursor-pointer opacity-50 hover:opacity-100"
            />
            <Image
              src={logoo}
              alt=""
              className="transition-some mr-[47px] w-[60px] cursor-pointer opacity-50 hover:opacity-100"
            />
            <Image
              src={ipsum}
              alt=""
              className="transition-some mr-[35px] w-[107px] cursor-pointer opacity-50 hover:opacity-100"
            />
            <Image
              src={ipsum2}
              alt=""
              className="transition-some mr-[56px] w-[84px] cursor-pointer opacity-50 hover:opacity-100"
            />
            <Image
              src={ipsum3}
              alt=""
              className="transition-some mr-[45px] w-[64px] cursor-pointer opacity-50 hover:opacity-100"
            />
            <Image
              src={ipsum4}
              alt=""
              className="transition-some mr-[38px] w-[106px] cursor-pointer opacity-50 hover:opacity-100"
            />
            <Image
              src={ipsum5}
              alt=""
              className="transition-some mr-[20px] hidden w-[81px] cursor-pointer opacity-50 hover:opacity-100 md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
