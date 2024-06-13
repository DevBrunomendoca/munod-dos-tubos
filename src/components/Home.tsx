"use client";

import Image from "next/image";
import Title from "./Title";
import Paragraph from "./Paragraph";
import ButtonNav from "./ButtonNa";
import { useEffect, useState } from "react";

const Home = () => {
  const [bannerHome, setBannerHome] = useState<boolean>(false);

  useEffect(() => {
    const handleSize = () => {
      window.innerWidth < 768 ? setBannerHome(true) : setBannerHome(false);
    };
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return (
    <section className="w-full relative">
      {bannerHome ? (
        <Image
          src="/banner-home-mobile.png"
          alt="Banner Mobile"
          width={0}
          height={0}
          sizes="100vh"
          style={{ width: "100%", minHeight: "85vh" }}
          className="object-cover"
          priority
        />
      ) : (
        <Image
          src="/banner-home.png"
          alt="Banner Mobile"
          width={0}
          height={0}
          sizes="100vh"
          style={{ width: "100%", minHeight: "85vh" }}
          className="object-cover"
          priority
        />
      )}

      <div className="absolute top-4 w-full h-full px-2 py-2 flex flex-col items-start justify-center gap-4 xl:max-w-7xl ml-auto mr-auto left-0 right-0">
        <Title textTitle="A MELHOR SOLUÇÃO EM TUBOS, CONEXÕES E VÁLVULAS" />
        <Paragraph
          textParagraph="Somos uma empresa especializada em tubos, conexoes e válvulas para diversos segmentos como construção civil , saneamento básico e sistemas hidráulicos."
          textColor="text-first-color max-w-3xl"
        />
        <ButtonNav textButton="Fazer um Orçamento" href="/contact" />
      </div>
    </section>
  );
};

export default Home;
