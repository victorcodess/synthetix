"use client";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Form from "./form";
import { motion } from "framer-motion";

/**
 * Props for `ContactUs`.
 */
export type ContactUsProps = SliceComponentProps<Content.ContactUsSlice>;

/**
 * Component for "ContactUs" Slices.
 */
const ContactUs = ({ slice }: ContactUsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="contact-us"
      className="relative flex w-full flex-col items-center justify-start overflow-hidden px-[24px] pb-[56px] pt-[112px] text-white md:px-12 md:pt-[144px] xl:px-16"
    >
      <div className="flex w-full flex-col items-start justify-start 2xl:max-w-[1440px]">
        <div className="absolute top-[70px] -z-10 h-[180px] w-[180px] rounded-[120px] bg-[#ff6d00]/[0.25] blur-[50px] sm:top-[90px] sm:h-[240px] sm:w-[240px] md:top-[112px]" />
        <div className="text-gradient w-max rounded-full border border-white/[12%] px-4 py-2.5 text-[12px] leading-[17.28px] tracking-[0.72px]">
          CONTACT US
        </div>
        <h2 className="mt-4 text-left text-[32px] leading-[34.56px] tracking-[-1.12px] sm:w-[400px] md:w-[648px] md:text-balance md:text-[52px] md:leading-[56.16px] xl:text-[56px] xl:leading-[60.48px]">
          <PrismicRichText field={slice.primary.heading} />
        </h2>
      </div>

      <div className="flex w-full flex-col gap-4 xl:flex-row xl:pt-16 2xl:max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex w-full flex-col gap-4 xl:w-1/2"
        >
          <div className="mt-16 grid w-full grid-cols-1 grid-rows-4 place-content-center place-items-center gap-x-[40px] gap-y-[40px] rounded-2xl bg-gradient-to-b from-[#FF6D00]/[0.05] to-[#FF6D00]/[0.25] px-6 py-10 outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] sm:grid-cols-2 sm:grid-rows-2 xl:mt-0 xl:px-10 xl:py-12">
            {slice.items.map((item) => (
              <div
                key={asText(item.value)}
                className="flex w-full flex-col items-start justify-center gap-1"
              >
                <h5 className="text-[12px] font-medium leading-[17.28px] tracking-[0.72px] opacity-50">
                  <PrismicRichText field={item.detail} />
                </h5>
                <p className="cursor-pointer text-[21px] leading-[30.24px] tracking-[-0.21px] transition-all hover:text-[#FF6D00]">
                  <PrismicRichText field={item.value} />
                </p>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col rounded-2xl bg-gradient-to-b from-[#fff]/[0.05] to-[#fff]/[0.15] px-6 py-10 outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] md:px-10 md:py-12 xl:mt-0 xl:px-10 xl:py-12">
            <h5 className="text-[12px] font-medium leading-[17.28px] tracking-[0.72px] opacity-50">
              <PrismicRichText field={slice.primary.tag} />
            </h5>
            <h3 className="mt-4 text-[21px] leading-[22.68px] md:text-[24px] md:leading-[25.92px]">
              <PrismicRichText field={slice.primary.cta} />
            </h3>
            <p className="mt-2.5 w-full pb-10 text-base leading-[23.04px] tracking-[-0.16px] sm:w-[360px]">
              <PrismicRichText field={slice.primary.body} />
            </p>

            <Form />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
        >
          <PrismicNextImage
            field={slice.primary.image}
            className="w-full rounded-2xl object-cover outline outline-2 -outline-offset-[2px] outline-white/[12%] xl:h-[849px] xl:w-[687px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
