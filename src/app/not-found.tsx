"use client";
import Hero from "@/slices/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section
      id="call-to-action"
      className="relative flex min-h-[100vh] w-full flex-col items-center justify-start overflow-hidden px-[24px] pb-[64px] pt-[112px] text-white md:px-12 md:pt-[144px] xl:px-16"
    >
      <div
        style={{
          background:
            "radial-gradient(43.3% 50% at 50% 50%,var(--token-f62537b2-225f-4612-b5a7-10d588628663, rgba(255, 109, 0, .35)) 0%,var(--token-c92ed155-c13c-498b-9920-b8553fdbf57c, rgba(16, 0, 0, 1)) 100%)",
        }}
        className="absolute -z-50 -left-[50%] right-0 top-0 !mx-auto h-[800px] w-[200%] opacity-100 sm:-left-[0] sm:w-full"
      ></div>

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
        className="w-full sm:w-[400px] md:w-full xl:w-[1090px] flex flex-col items-center justify-center"
      >
        <h2 className="text-center text-[40px] leading-[43.2px] tracking-[-2px] md:text-[64px] md:leading-[69.12px] xl:text-[80px] xl:leading-[86.4px]">
          404
        </h2>
        <p>Page Not Found</p>
      </motion.div>

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
        className="mt-8 flex w-min items-center gap-2"
      >
        <Link
          href={"/"}
          className="mt-2 inline-flex w-max justify-center rounded-full bg-gradient-to-b from-[#ff6d00]/10 to-[#ff6d00]/[50%] px-7 py-4 text-base font-medium leading-[23.04px] tracking-[-0.16px] text-white outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-[#ff6d00]/60"
        >
          Back to Home
        </Link>
      </motion.div>

      <div className="relative -z-10 mt-4 flex w-full items-center justify-center gap-[71.33px] xl:!-mt-16 xl:items-start">
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
        >
          <Image
            src={
              "https://images.prismic.io/synthetix/ZmWiqZm069VX1k2p_3d-element-twelve.png?auto=compress%2Cformat&w=800&h=800&fit=max"
            }
            alt="3d image"
            width={460}
            height={448}
            className="w-full p-16 md:px-52 xl:!w-[320px] xl:!p-[45px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.2,
              delay: 0.4,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="hidden xl:block"
        >
          <Image
            src={
              "https://images.prismic.io/synthetix/ZmWiqJm069VX1k2o_3d-element-thirteen.png?auto=compress%2Cformat&w=800&h=800&fit=max"
            }
            alt="3d image"
            width={460}
            height={448}
            className="hidden p-[70px] xl:mt-20 xl:block xl:min-w-[320px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.2,
              delay: 0.3,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="hidden xl:block"
        >
          <Image
            src={
              "https://images.prismic.io/synthetix/ZmWiqZm069VX1k2p_3d-element-twelve.png?auto=compress%2Cformat&w=800&h=800&fit=max"
            }
            alt="3d image"
            width={460}
            height={448}
            className="hidden xl:block xl:w-[320px] xl:p-[45px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
