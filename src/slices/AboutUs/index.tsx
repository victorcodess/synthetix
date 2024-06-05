import { Content, asText } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutUs`.
 */
export type AboutUsProps = SliceComponentProps<Content.AboutUsSlice>;

/**
 * Component for "AboutUs" Slices.
 */
const AboutUs = ({ slice }: AboutUsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex w-full flex-col items-center justify-start overflow-hidden p-4 px-[21px] pb-[56px] pt-[112px] text-white md:px-12 md:pt-[144px]"
    >
      <div className="flex w-full flex-col items-center justify-center gap-4 min-[425px]:w-[400px] md:w-full lg:w-[760px] xl:w-[648px] relative">
        <div className="w-[240px] h-[240px] absolute bg-[#ff6d00]/[0.25] top-2.5 -z-10 rounded-[120px] blur-[50px]"/>

        <div className="text-gradient mx-auto w-max rounded-full border border-white/[12%] px-4 py-2.5 text-[12px] leading-[17.28px] tracking-[0.72px]">
          ABOUT US
        </div>

        <h2 className="text-balance text-center text-[32px] leading-[34.56px] tracking-[-1.12px] md:text-[52px] md:leading-[56.16px] xl:text-[56px] xl:leading-[60.48px]">
          <PrismicRichText field={slice.primary.heading} />
        </h2>

        <p className="w-full pt-[8px] text-center text-[21px] leading-[30.24px] tracking-[-0.21px] md:w-[648px]">
          <PrismicRichText field={slice.primary.body} />
        </p>

        <PrismicNextLink
          className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-b from-[#ff6d00]/10 to-[#ff6d00]/[50%] px-7 py-4 text-base font-medium leading-[23.04px] tracking-[-0.16px] text-white outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-[#ff6d00]/60 w-max"
          field={slice.primary.services}
        >
          Our Services
        </PrismicNextLink>
      </div>

      <div className="relative mt-20 flex w-full flex-col sm:flex-row gap-12 sm:gap-4 items-start justify-center py-16 sm:py-20 sm:items-center">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.15) 50.56%, rgba(255, 255, 255, 0.05) 100%)",
          }}
          className="absolute top-0 h-[1px] w-full bg-white"
        />
        {slice.items.map((item) => (
          <div
            key={asText(item.heading)}
            className="flex w-full flex-col sm:w-1/3 sm:pr-6"
          >
            <PrismicNextImage field={item.icon} className="w-10" />
            <h3 className="mt-8 text-[24px] leading-[25.92px]">
              <PrismicRichText field={item.heading} />
            </h3>
            <p className="trackinh-[-0.16px] mt-3 text-[16px] leading-[23.04px] opacity-50">
              <PrismicRichText field={item.body} />
            </p>
          </div>
        ))}
      </div>

      <div className="flex h-[400px] w-full justify-center overflow-hidden rounded-2xl smd:h-[600px] xl:h-[772px]">
        <video
          className="h-[400px] max-w-none rounded-2xl md:h-[600px] xl:h-[772px]"
          autoPlay
          loop
          playsInline
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/8720760/8720760-hd_1366_720_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default AboutUs;
