"use client";

import CardContact from "@/components/CardContsct";
import MapEmbed from "@/components/Iframe";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";

const Contact: FunctionComponent = () => {
  const [bannerContact, setBannerContact] = useState<boolean>(true);

  useEffect(() => {
    const handleSize = () => {
      window.innerWidth < 768
        ? setBannerContact(true)
        : setBannerContact(false);
    };
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.9448668555456!2d-49.48297318822905!3d-16.679642145311583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5daf6d2304b5%3A0xd247c1d35196448a!2sR.%20M-22%2C%20Trindade%20-%20GO%2C%2075389-371!5e0!3m2!1spt-BR!2sbr!4v1718074409183!5m2!1spt-BR!2sbr";
  return (
    <>
      <section className="relative">
        {bannerContact ? (
          <Image
            width={0}
            height={0}
            sizes="100vh"
            style={{ width: "100%", minHeight: "75vh" }}
            className="object-cover"
            alt="Banner Fale conosco"
            src="/banner-contact.png"
            priority
          />
        ) : (
          <Image
            width={0}
            height={0}
            sizes="100vh"
            style={{ width: "100%", minHeight: "75vh" }}
            className="object-cover"
            alt="Banner Fale conosco"
            src="/banner-contact-desc.png"
            priority
          />
        )}
        <div className="absolute top-4 flex flex-col items-start justify-center h-full px-2 gap-2 xl:max-w-7xl ml-auto mr-auto left-0 right-0">
          <Title textTitle="Fale conosco" />
          <Paragraph
            textColor="text-first-color"
            textParagraph="Nosso time está preparado para atendê-lo com eficiência e dedicação."
          />
        </div>
      </section>
      <section className="w-full flex flex-col gap-8 items-center px-2 mt-8">
        <div
          className="grid grid-cols-1  gap-12 px-2 py-4  w-full relative z-10 bg-first-color rounded-md md:grid-cols-2 max-w-7xl m-auto lg:grid-cols-4"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          }}
        >
          <CardContact
            iconCard="/icone-tel.png"
            textCard="Ligue ou nos mande uma menssagem de texto."
            textButton="Telefone"
            hrefCard="tel:+5562995342234"
          />
          <CardContact
            iconCard="/icon-wtpp.png"
            textCard="Entre em contato através do whatsapp."
            textButton="Whatsapp"
            hrefCard="https://wa.link/cn46of"
          />
          <CardContact
            iconCard="/icon-insta2.png"
            textCard="Nos Conheça através das redes sociais."
            textButton="Instagra"
            hrefCard="#"
          />
          <CardContact
            iconCard="/icon-email-b.png"
            textCard="Deixe seu feedback através do email."
            textButton="Email"
            hrefCard="mailto:mundodostubos@gmail.com"
          />
        </div>
        <div className="pt-8 w-full">
          <MapEmbed src={mapSrc} />
        </div>
      </section>
    </>
  );
};

export default Contact;
