import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "./global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Head from "next/head";
import CustomHead from "@/components/CunstonHead";

const lato = Lato({
  weight: ["900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CustomHead />
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
