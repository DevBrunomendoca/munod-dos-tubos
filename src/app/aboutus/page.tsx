"use client";

import ButtonNav from "@/components/ButtonNa";
import Paragraph from "@/components/Paragraph";
import SecondTitle from "@/components/SecondTitle";
import Title from "@/components/Title";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const About = () => {
  const [bannerHome, setBannerHome] = useState<boolean>(true);

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
    <>
      <section className="relative">
        {bannerHome ? (
          <Image
            width={0}
            height={0}
            sizes="100vh"
            style={{ width: "100%", minHeight: "70vh" }}
            alt="Banner Sobbre Nós"
            src="/banner-about.png"
            className="object-cover"
            priority
          />
        ) : (
          <Image
            width={0}
            height={0}
            sizes="100vh"
            style={{ width: "100%", minHeight: "70vh" }}
            alt="Banner Sobbre Nós"
            src="/banner-about-desc.png"
            className="object-cover"
            priority
          />
        )}
        <div className="absolute w-full top-4 flex flex-col items-start justify-center gap-4 px-2 h-full xl:max-w-7xl ml-auto mr-auto left-0 right-0 ">
          <Title textTitle="Quem Somos, Conheça Nossa História:" />
          <Paragraph
            textParagraph="Nossa história começou em 2010  atuando com materiais hidráulicos, garantindo 16 anos de experiência."
            textColor="text-first-color max-w-3xl"
          />
        </div>
      </section>
      <section className="px-2 pt-8 pb-4 ">
        <div className="flex flex-col items-start gap-4 md:flex-row max-w-7xl m-auto">
          <div className="flex flex-col gap-4 w-full">
            <SecondTitle
              textSecondTitle="A MELHOR SOLUÇÃO EM TUBOS, CONEXÕES E VÁLVULAS"
              className="text-third-color "
            />
            <Paragraph
              textParagraph="Localizada no centro oeste, nossa empresa é uma referência de excelência na distribuição de produtos especializados. Com 16 anos de experiência no mercado, construímos uma reputação sólida baseada em qualidade, confiabilidade e inovação. Nossa extensa linha de produtos abrange uma variedade de setores."
              textColor="text-third-color"
            />
            <ButtonNav href="/contact" textButton="Fazer um Orçamento" />
          </div>
          <div className="w-full">
            <Image
              width={390}
              height={260}
              alt="Imagem de Válvulas"
              src="/banner-valvula.png"
              className="w-full"
            />
          </div>
        </div>
        <div className="px-2 py-6 flex flex-col items-start gap-6 md:flex-row max-w-7xl m-auto ">
          <p
            style={{ borderLeft: "3px solid #1F2731" }}
            className={`pl-3 w-full ${poppins.className}`}
          >
            O segredo do nosso sucesso reside na combinação de produtos com
            qualidade verificada. Além disso, nossa equipe de especialistas em
            vendas está comprometida em fornecer soluções de entrega eficientes
            e pontuais, garantindo que os produtos cheguem aos nossos clientes
            quando e onde são necessários.
          </p>
          <p
            style={{ borderLeft: "3px solid #1F2731" }}
            className={`pl-3 w-full ${poppins.className}`}
          >
            Mas não é apenas sobre produtos e serviços; valorizamos
            profundamente o relacionamento com nossos clientes. Estamos sempre
            prontos para ouvir suas necessidades, oferecer suporte técnico
            especializado e encontrar soluções personalizadas para seus desafios
            específicos. Nossa missão é não apenas atender, mas exceder as
            expectativas dos nossos clientes, construindo parcerias sólidas e
            duradouras que impulsionam o sucesso mútuo.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
