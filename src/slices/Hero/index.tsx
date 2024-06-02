import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

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
      className="flex min-h-[100vh] items-center justify-center text-white p-4 px-6 min-[425px]:px-[42px] pt-[174px] md:pt-[255px] xl:py-[199px] md:px-12"
      style={{
        background:
          "radial-gradient(43.3% 50% at 50% 50%,var(--token-f62537b2-225f-4612-b5a7-10d588628663, rgba(255, 109, 0, .35)) 0%,var(--token-c92ed155-c13c-498b-9920-b8553fdbf57c, rgb(5, 2, 0)) 100%)",
      }}
    >
      <div className="w-full min-[425px]:w-[400px] md:w-full lg:w-[760px] xl:w-[1090px] flex flex-col items-center justify-center gap-4 relative">
        <div className="text-gradient rounded-full border border-white/[12%] px-4 py-2.5 text-[12px] leading-[17.28px] tracking-[0.72px] w-max mx-auto">
          AI DATA PROCESSING
        </div>

        <h1 className="text-balance text-center text-[40px] leading-[43.2px] tracking-[-2px] md:text-[60px] md:leading-[64.8px] xl:text-[80px] xl:leading-[86.4px]">
          <PrismicText field={slice.primary.heading} />
        </h1>

        <p className="w-full pt-[12px] text-center text-[21px] leading-[30.24px] tracking-[-0.21px] md:w-[584px]">
          <PrismicText field={slice.primary.body} />
        </p>

        <div className="mt-4 flex w-full flex-col md:flex-row items-center justify-center gap-2">
          <PrismicNextLink
            className="inline-flex w-full justify-center rounded-full bg-gradient-to-b from-[#ff6d00]/10 to-[#ff6d00]/[50%] px-7 py-4 text-base leading-[23.04px] tracking-[-0.16px] text-white outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-[#ff6d00]/60 md:w-max"
            field={slice.primary.button_link}
          >
            Contact Us
          </PrismicNextLink>
          <PrismicNextLink
            className="inline-flex w-full justify-center rounded-full bg-gradient-to-b from-white/[5%] to-white/[15%] px-7 py-4 text-base leading-[23.04px] tracking-[-0.16px] text-white outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:!bg-[#fff]/[12%] md:w-max"
            field={slice.primary.button_link}
          >
            Our Services
          </PrismicNextLink>
        </div>

        <PrismicNextImage field={slice.primary.image} className="mt-20 w-80 md:w-96 md:mt-28 xl:absolute xl:-bottom-[180px] xl:-left-[100px] xl:mt-0 xl:w-72" />

        <PrismicNextImage field={slice.primary.image} className="hidden xl:block xl:absolute xl:-bottom-[180px] xl:-right-[100px] xl:mt-0 xl:w-72" />
      </div>
    </section>
  );
};

export default Hero;
