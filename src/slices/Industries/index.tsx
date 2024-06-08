import { Content, asText } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import IndustryItems from "./industry-items";
import Linker from "@/components/linker";
/**
 * Props for `Industries`.
 */
export type IndustriesProps = SliceComponentProps<Content.IndustriesSlice>;

/**
 * Component for "Industries" Slices.
 */
const Industries = ({ slice }: IndustriesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="industries"
      className="relative flex w-full flex-col items-center justify-start overflow-hidden p-4 px-[21px] pb-[56px] pt-[112px] text-white md:px-12 md:pt-[144px] xl:px-[64px]"
    >
      <div className="relative flex w-full flex-col items-center justify-center gap-4 min-[425px]:w-[400px] md:w-full lg:w-[760px] xl:w-[648px]">
        <div className="absolute top-2.5 -z-10 h-[240px] w-[240px] rounded-[120px] bg-[#ff6d00]/[0.25] blur-[50px]" />

        <div className="text-gradient mx-auto w-max rounded-full border border-white/[12%] px-4 py-2.5 text-[12px] leading-[17.28px] tracking-[0.72px]">
          INDUSTRIES
        </div>

        <h2 className="text-balance text-center text-[32px] leading-[34.56px] tracking-[-1.12px] md:text-[52px] md:leading-[56.16px] xl:text-[56px] xl:leading-[60.48px]">
          <PrismicRichText field={slice.primary.heading} />
        </h2>

        <p className="w-full pt-[8px] text-center text-[21px] leading-[30.24px] tracking-[-0.21px] md:w-[648px]">
          <PrismicRichText field={slice.primary.body} />
        </p>

        <Linker
          className="mt-2 inline-flex w-max justify-center rounded-full bg-gradient-to-b from-[#ff6d00]/10 to-[#ff6d00]/[50%] px-7 py-4 text-base font-medium leading-[23.04px] tracking-[-0.16px] text-white outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-[#ff6d00]/60"
          field={slice.primary.contact}
        />
      </div>

      <IndustryItems slice={slice} />
    </section>
  );
};

export default Industries;
