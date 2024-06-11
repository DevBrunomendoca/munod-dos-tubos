import Image from "next/image";
import Title from "./Title";
import Paragraph from "./Paragraph";
import ButtonNav from "./ButtonNa";

const Home = () => {
  return (
    <section className="w-full relative">
      <Image
        src="/banner-home-mobile.png"
        alt="Banner Mobile"
        width={0}
        height={0}
        sizes="100vh"
        style={{ width: "100%", minHeight: "85vh" }}
        className="object-cover"
      />
      <div className="absolute top-4 w-full h-full px-2 py-2 flex flex-col items-start justify-center gap-4">
        <Title textTitle="A MELHOR SOLUÇÃO EM TUBOS, CONEXÕES E VÁLVULAS" />
        <Paragraph
          textParagraph="A mundo dos tubos e empresa especializada em vendas tubos e conexões
          industriais para diversos segmentos, construção civil, industriais,
          saneamento básico e sistemas hidráulicos."
          textColor="text-first-color"
        />
        <ButtonNav textButton="Fazer um Orçamento" href="/contact" />
      </div>
    </section>
  );
};

export default Home;
