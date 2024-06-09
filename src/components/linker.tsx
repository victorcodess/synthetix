"use client";
import { asText } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import React from "react";

type LinkerProps = {
  className?: string;
  field: any;
};

export const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*#/, "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};

const Linker = ({ className, field }: LinkerProps) => {
 

  const convertToHash = (input: string | null): string => {
    if (typeof input !== "string") {
      return "";
    }

    // List of common prefixes to remove
    const prefixes = ["our ", "the ", "your "];

    // Remove any prefixes
    let result = input.toLowerCase();
    for (const prefix of prefixes) {
      if (result.startsWith(prefix)) {
        result = result.slice(prefix.length);
        break;
      }
    }

    // Replace spaces with hyphens and prepend with a hash
    return `#${result.replace(/\s+/g, "-")}`;
  };

  const text = asText(field);

  return (
    <Link
      href={convertToHash(text)}
      className={className}
      onClick={handleScroll}
    >
      <PrismicRichText field={field} />
    </Link>
  );
};

export default Linker;
