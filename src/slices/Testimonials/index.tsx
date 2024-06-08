import { Content } from "@prismicio/client";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Carousel from "./carousel";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="testimonials"
      className="relative flex w-full flex-col items-center justify-start overflow-hidden p-4 px-[21px] pb-[48px] pt-[112px] text-white md:px-12 md:pb-[56px] md:pt-[144px] xl:px-[64px]"
    >
      <div className="relative flex w-full flex-col items-center justify-center gap-4 min-[425px]:w-[400px] md:w-full lg:w-[760px] xl:w-[648px]">
        <div className="absolute top-2.5 -z-10 h-[240px] w-[240px] rounded-[120px] bg-[#ff6d00]/[0.25] blur-[50px]" />

        <div className="text-gradient mx-auto w-max rounded-full border border-white/[12%] px-4 py-2.5 text-[12px] leading-[17.28px] tracking-[0.72px]">
          TESTIMONIALS
        </div>

        <h2 className="text-balance text-center text-[32px] leading-[34.56px] tracking-[-1.12px] md:text-[52px] md:leading-[56.16px] xl:text-[56px] xl:leading-[60.48px]">
          <PrismicRichText field={slice.primary.heading} />
        </h2>

        <p className="w-full pt-[8px] text-center text-[21px] leading-[30.24px] tracking-[-0.21px] md:w-[648px]">
          <PrismicRichText field={slice.primary.body} />
        </p>
      </div>

      <Carousel slice={slice} />
    </section>
  );
};

export default Testimonials;
