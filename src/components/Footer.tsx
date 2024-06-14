import Link from "next/link";
import Paragraph from "./Paragraph";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center bg-second-color ">
      <section
        className="px-2 flex flex-col items-center justify-center gap-4 w-full"
        style={{
          backgroundImage: "url('/banner-footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "end",
          minHeight: "400px",
        }}
      >
        <h3 className="text-2xl text-first-color">Horários de funcionamento</h3>
        <div className="text-center">
          <Paragraph
            textParagraph="Segunda à Sexta: 08:00 às 18:00"
            textColor="text-first-color"
          />
          <Paragraph
            textParagraph="Sabádo, Domingo e Feriados: Fechado"
            textColor="text-first-color"
          />
        </div>
      </section>

      <section className="bg-second-color  flex flex-col items-start w-full gap-4 px-2 py-4 md:flex-row  justify-between max-w-7xl m-auto">
        <div className="flex flex-col items-start gap-4 max-w-sm">
          <Image src="/logo2.png" alt="Logo" width={126} height={52} />
          <Paragraph
            textParagraph="A mundo dos tubos é uma empresa especializada em vendas tubos e conexões industriais para diversos segmentos como construção civil, industriais, saneamento básico e sistemas hidráulicos"
            textColor="text-first-color"
          />
        </div>

        <div className="flex flex-col gap-3 ">
          <div className="flex items-center gap-2">
            <Image width={25} height={25} alt="" src="/icon-tel.png" />
            <Paragraph
              textParagraph="(62) 99534-2234"
              textColor="text-first-color"
            />
          </div>
          <div className="flex items-center gap-2">
            <Image width={25} height={25} alt="" src="/icon-email.png" />
            <Paragraph
              textParagraph="mundodostubos@gmail.com"
              textColor="text-first-color"
            />
          </div>
          <div className="flex items-center gap-2">
            <Image width={25} height={25} alt="" src="/icon-location.png" />
            <Paragraph
              textParagraph="Rua m22 qd.23 lt.30 resid.Monte Cristo Trindade-GO"
              textColor="text-first-color"
            />
          </div>
          <div className="flex items-center gap-2">
            <Image width={25} height={25} alt="" src="/icon-insta.png" />
            <Paragraph
              textParagraph="@instagram"
              textColor="text-first-color"
            />
          </div>
        </div>
        <div>
          <ul className="text-first-color text-lg flex flex-col gap-3 text-start py-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutus">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/products">Produtos</Link>
            </li>
            <li>
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="bg-second-color text-start w-full px-2 py-4 md:text-center">
        <Paragraph
          textParagraph="2024© - Todos os direitos reservados."
          textColor="text-first-color"
        />
      </div>
    </footer>
  );
};

export default Footer;
