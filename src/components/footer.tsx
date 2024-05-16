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
    <footer className="w-full flex flex-col items-center justify-center px-12 lg:px-16 pb-[32px]">
      <div className="w-full flex flex-col items-center justify-center gap-8 border-y-2 border-white/10 py-12">
        <Link href="/">
          <div className="w-[54px] h-[54px] duration-300 transition-all bg-[#8f37f7]/40 hover:bg-[#8f37f7]/70 rounded-full flex items-center justify-center border-opacity-10">
            <Image
              src={logo}
              alt="logo"
              width={300}
              height={300}
              className="w-6 h-6"
            />
          </div>
          <span className="sr-only">Synthetix Home Page</span>
        </Link>

        <nav className="text-white mt-[8px]">
          <ul className="flex w-full">
            {settings.data.navigation.map((item) => (
              <li
                key={item.label}
                className="text-base leading-[23.04px] tracking-[-0.16px] opacity-50 hover:opacity-100 transition-opacity cursor-pointer text-center font-normal w-[123px]"
              >
                <PrismicNextLink field={item.link} className="text-center">
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-[164px] h-[48px] flex items-center justify-around">
          <a
            href="https://www.linkedin.com/"
            className="opacity-50 hover:opacity-100 transition-all"
          >
            <Image
              src={linkedIn}
              alt="logo"
              width={300}
              height={300}
              className="max-w-6 min-h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="opacity-50 hover:opacity-100 transition-all"
          >
            <Image
              src={twitter}
              alt="logo"
              width={300}
              height={300}
              className="max-w-6 min-h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="opacity-50 hover:opacity-100 transition-all"
          >
            <Image
              src={facebook}
              alt="logo"
              width={300}
              height={300}
              className="max-w-6 min-h-6"
            />
          </a>
        </div>
      </div>

      <p className="text-xs leading-[17.28px] tracking-[0.72px] text-center opacity-50 text-white font-medium mt-[17px]">@2024, SYNTHETIX</p>
    </footer>
  );
};

export default Footer;
