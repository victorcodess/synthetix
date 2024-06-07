"use client";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import { Simplify } from "../../../prismicio-types";

/**
 * Props for `Industries`.
 */
export type IndustriesProps = SliceComponentProps<Content.IndustriesSlice>;

/**
 * Component for "Industries" Slices.
 */

const IndustryItems = ({ slice}: IndustriesProps): JSX.Element => {
  const [industry, setIndustry] = useState<
    Simplify<Content.IndustriesSliceDefaultItem>
  >(slice.items[0]);


  const handleClick = (item: Simplify<Content.IndustriesSliceDefaultItem>) => {
    setIndustry(item);
  };

  return (
    <div className="flex w-full items-center justify-center gap-4 xl:mt-[120px]">
      <div className="w-full xl:flex xl:w-[452px] xl:flex-col xl:items-center xl:justify-center xl:gap-14">
        {slice.items.map((item) => (
          <div
            key={asText(item.heading)}
            className={`flex w-full cursor-pointer flex-col items-center justify-center border-b border-white/[0.12] pb-12 pt-14 transition-all hover:border-white/[0.24] md:pt-20 xl:items-start xl:pb-6 xl:pt-0 ${industry.image.url === item.image.url ? "opacity-100" : "xl:opacity-50"}`}
            onClick={() => handleClick(item)}
          >
            <PrismicNextImage
              field={item.image}
              className="rotate w-[184px] md:w-[256px] xl:hidden"
            />
            <h3 className="mt-5 text-[24px] leading-[25.92px] md:mt-10 xl:mt-0">
              <PrismicRichText field={item.heading} />
            </h3>
            <p className="mt-3 w-[360px] text-center text-[16px] leading-[23.04px] tracking-[-0.16px] xl:text-left">
              <PrismicRichText field={item.body} />
            </p>
          </div>
        ))}
      </div>
      <div className="relative hidden h-[600px] w-full items-center justify-center xl:flex">
        <div className="absolute top-0 bottom-0 my-auto left-0 right-0 mx-auto -z-10 h-[320px] w-[320px] rounded-[50px] bg-[#ff6d00]/[0.25] blur-[80px]" />

        <PrismicNextImage
          field={industry?.image}
          className="rotate w-[420px]"
        />
      </div>
    </div>
  );
};

export default IndustryItems;
