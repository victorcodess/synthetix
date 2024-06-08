import Image from "next/image";
import logo from "@/public/logo.svg";
import linkedIn from "@/public/linkedin.svg";
import twitter from "@/public/twitter.svg";
import facebook from "@/public/facebook.svg";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer className="flex w-full flex-col items-center justify-center overflow-hidden px-12 pb-[32px] lg:px-16">
      <div className="flex w-full flex-col items-center justify-center gap-8 border-y-2 border-white/10 py-12">
        <Link href="/">
          <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-gradient-to-b from-[#ff6d00]/10 to-[#ff6d00]/[50%] outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-[#ff6d00]/70">
            <Image
              src={logo}
              alt="logo"
              width={300}
              height={300}
              className="h-6 w-6"
            />
          </div>
          <span className="sr-only">Synthetix Home Page</span>
        </Link>

        <nav className="mt-[8px] text-white">
          <ul className="flex w-full flex-col gap-[17px] md:flex-row md:gap-0">
            {settings.data.navigation.map((item) => (
              <li
                key={item.label}
                className="w-[123px] cursor-pointer text-center text-base font-normal leading-[23.04px] tracking-[-0.16px] opacity-50 transition-opacity hover:opacity-100"
              >
                <PrismicNextLink field={item.link} className="text-center">
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex h-[48px] w-[164px] items-center justify-around">
          <a
            href="https://www.linkedin.com/"
            className="opacity-50 transition-all hover:opacity-100"
          >
            <Image
              src={linkedIn}
              alt="logo"
              width={300}
              height={300}
              className="min-h-6 max-w-6"
            />
          </a>
          <a
            href="https://www.twitter.com/"
            className="opacity-50 transition-all hover:opacity-100"
          >
            <Image
              src={twitter}
              alt="logo"
              width={300}
              height={300}
              className="min-h-6 max-w-6"
            />
          </a>
          <a
            href="https://www.facebook.com/"
            className="opacity-50 transition-all hover:opacity-100"
          >
            <Image
              src={facebook}
              alt="logo"
              width={300}
              height={300}
              className="min-h-6 max-w-6"
            />
          </a>
        </div>
      </div>

      <div className="mt-[17px] w-full items-center justify-center gap-[5px] text-center text-xs font-medium uppercase leading-[17.28px] tracking-[0.72px] text-[#828180] opacity-100 sm:flex">
        <p>
          Design by
          <a
            href="https://x.com/nutsdev_com"
            target="_blank"
            className="ml-[5px] cursor-pointer text-white underline underline-offset-2 transition-all duration-300 hover:!text-inherit hover:no-underline"
          >
            NutsDev
          </a>
        </p>
        <p>
        • Development by
          <a
            href="https://www.victorwilliams.me"
            target="_blank"
            className="mx-[5px] cursor-pointer !text-white underline underline-offset-2 transition-all duration-300 hover:!text-inherit hover:no-underline"
          >
            Victor Williams
          </a>
          — @2024, SYNTHETIX
        </p>
      </div>
    </footer>
  );
};

export default Footer;
