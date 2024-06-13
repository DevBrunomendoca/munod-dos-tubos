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

export const metadata: Metadata = {
  title: "Mundo do Tubos",
  description:
    "A mundo dos tubos é uma empresa especializada em vendas tubos e conexões industriais para diversos segmentos como construção civil, industriais, saneamento básico e sistemas hidráulicos",
  keywords:
    "Tubos de aço carbono, Tubos de aço inoxidáve, Tubos de PVC, Tubos de cobre, Tubos de alumínio, Tubos de ferro fundido, Tubos de PEAD, Tubos de PPR, Válvulas de controle, Válvulas de retenção, Conexões de aço carbono, Conexões de aço inoxidável, Mangueiras de incêndio, Extintores de incêndio, Manômetros, Medidores de nível",
};

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
