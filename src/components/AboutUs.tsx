import Image from "next/image";
import ButtonNav from "./ButtonNa";
import CardAbout from "./CardAbout";
import Paragraph from "./Paragraph";
import SecondTitle from "./SecondTitle";

const AboutUs = () => {
  return (
    <>
      <section className="px-2 pt-8 flex flex-col items-center gap-4">
        <SecondTitle
          className="text-center text-third-color"
          textSecondTitle="Vantagens exclusivas ao escolher nossos serviços!"
        />
        <div className=" w-full flex flex-wrap items-center justify-center justify-items-center gap-4">
          <CardAbout
            className="bg-fifth-color"
            textCard="Atendimento Personalizado"
            iconCard="/icon-atendimento.png"
          />
          <CardAbout
            className="bg-fifth-color"
            textCard="Variedade de Produtos"
            iconCard="/icon-variedade.png"
          />
          <CardAbout
            className="bg-fourth-color"
            textCard="Qualidade superior"
            iconCard="/icon-qualidade.png"
          />
          <CardAbout
            className="bg-fourth-color"
            textCard="Inovação Contínua"
            iconCard="/icon-inovacao.png"
          />
          <CardAbout
            className="bg-fourth-color"
            textCard="Entrega Pontual"
            iconCard="/icon-entrega.png"
          />
        </div>
      </section>
      <section className="px-2 py-8 flex flex-col items-start gap-4">
        <SecondTitle
          textSecondTitle="Conheça mais sobre à Mundo dos Tubos"
          className="text-start text-third-color"
        />
        <Paragraph
          textParagraph="Somos uma empresa líder na distribuição de produtos de alta qualidade. Nosso foco primordial reside na excelência, tanto em termos de produtos quanto de serviços. Com uma vasta gama de soluções para atender às variadas necessidades dos nossos clientes, combinamos inovação, qualidade e compromisso para proporcionar experiências excepcionais. Nossa dedicação em superar expectativas e garantir a satisfação do cliente é o que impulsiona nossa empresa a permanecer na vanguarda do mercado"
          textColor="text-third-color"
        />
        <ButtonNav href="/aboutus" textButton="Mais Informações" />
        <Image
          width={0}
          height={0}
          sizes="100vh"
          style={{ width: "100%" }}
          alt="Imagem tubos de aço"
          src="/image-aboutus.png"
        />
      </section>
    </>
  );
};

export default AboutUs;
