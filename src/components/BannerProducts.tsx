import Image from "next/image";
import SecondTitle from "./SecondTitle";

const BannerProducts = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-2  w-full"
      style={{
        backgroundImage: "url('/banner-products.png')",
        backgroundSize: "cover",
        minHeight: "500px",
      }}
    >
      <SecondTitle
        textSecondTitle="Confira à nossa linha de produtos a baixo"
        className="text-first-color text-center"
      />
      <a href="#products-section">
        <Image
          width={64}
          height={64}
          alt="Icone botão descer para baixo"
          src="/icon-btn.png"
        />
      </a>
    </section>
  );
};

export default BannerProducts;
