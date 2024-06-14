"use client";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import prev from "../../public/prev.png";
import next from "../../public/next.png";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Carousel = ({
  slice,
}: {
  slice: Content.TestimonialsSlice;
}): JSX.Element => {
  const reviewSwiperRef = useRef<any>();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity, scale }}
      className="relative w-full 2xl:max-w-[1440px]"
    >
      <Swiper
        slidesPerView={1}
        speed={1000}
        centeredSlides={false}
        onSwiper={(swiper) => {
          reviewSwiperRef.current = swiper;
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mt-[88px] !flex h-[680px] w-[100%] !items-start !justify-center !rounded-2xl !bg-gradient-to-b from-white/[0.05] to-white/[0.15] outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] md:h-[521px] xl:mt-[80px]"
      >
        {slice.items.map((item) => (
          <SwiperSlide
            key={asText(item.testimonial)}
            className="!relative !z-20 !flex w-full !cursor-pointer flex-col items-center justify-start !rounded-2xl px-[25px] pt-[135px] md:px-[102px] md:pt-[71px] xl:pt-[125px]"
          >
            <PrismicNextImage
              field={item.logo}
              className="w-[144px] opacity-50 transition-all hover:opacity-100"
            />
            <p className="mt-12 w-full text-center text-[21px] leading-[30.24px] tracking-[-0.21px] xl:w-[720px]">
              <PrismicRichText field={item.testimonial} />
            </p>
            <h4 className="mt-12 text-base leading-[23.04px] tracking-[-0.16px]">
              <PrismicRichText field={item.contact} />
            </h4>
            <p className="text-center text-base leading-[23.04px] tracking-[-0.16px] opacity-50 ">
              <PrismicRichText field={item.role} />
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-[56px] left-0 right-0 z-10 mx-auto flex h-6 w-full items-center justify-center gap-4 xl:bottom-0 xl:top-20 xl:my-auto xl:justify-between xl:px-12">
        <Image
          src={prev}
          alt=""
          className="w-[24px] cursor-pointer"
          onClick={() => reviewSwiperRef.current.slidePrev()}
        />
        <Image
          src={next}
          alt=""
          className="w-[24px] cursor-pointer"
          onClick={() => reviewSwiperRef.current.slideNext()}
        />
      </div>
    </motion.div>
  );
};

export default Carousel;
