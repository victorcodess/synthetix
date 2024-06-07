import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="services"
      className="relative flex w-full flex-col items-start justify-start overflow-hidden px-[21px] pb-[56px] pt-[112px] text-white md:px-12 md:pt-[144px]"
    >
      <div className="absolute top-[90px] -z-10 h-[240px] w-[240px] rounded-[120px] bg-[#ff6d00]/[0.25] blur-[50px] md:top-[112px]" />

      <div className="text-gradient w-max rounded-full border border-white/[12%] px-4 py-2.5 text-[12px] leading-[17.28px] tracking-[0.72px]">
        SERVICES
      </div>

      <h2 className="mt-4 text-left text-[32px] leading-[34.56px] tracking-[-1.12px] sm:w-[400px] md:w-[648px] md:text-balance md:text-[52px] md:leading-[56.16px] xl:text-[56px] xl:leading-[60.48px]">
        <PrismicRichText field={slice.primary.heading} />
      </h2>

      <div className="mt-[61px] grid w-full grid-cols-1 grid-rows-6 place-content-center place-items-center gap-x-[16px] gap-y-[52px] md:mt-[72px] md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
        {slice.items.map((item) => (
          <div key={asText(item.heading)} className="flex w-full flex-col">
            <PrismicNextImage
              field={item.image}
              className="aspect-square w-full rounded-2xl object-cover outline outline-2 -outline-offset-[2px] outline-white/[15%]"
            />
            <h3 className="mt-[14px] text-[21px] leading-[22.68px] md:mt-[20px] md:text-[24px] md:leading-[25.92px]">
              <PrismicRichText field={item.heading} />
            </h3>
            <p className="mt-3 text-base leading-[23.04px] tracking-[-0.16px] opacity-50 md:pr-6">
              <PrismicRichText field={item.body} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
