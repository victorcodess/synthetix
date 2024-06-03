import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  // variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="bg-[#100000]">
        <Header />
        <main className="text-white">{children}</main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
