import Image from "next/image";
import Link from "next/link";
import SecondTitle from "./SecondTitle";

const ProductsSection = () => {
  return (
    <section
      id="products-section"
      className="px-2 py-8 w-full flex flex-col items-center gap-4"
    >
      <Link href="/products" className="w-full">
        <div
          className="w-full flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner-products-tubos.png')",
            backgroundSize: "cover",
            minHeight: "225px",
          }}
        >
          <SecondTitle textSecondTitle="Tubos" className="text-first-color " />
        </div>
      </Link>

      <Link href="/products" className="w-full">
        <div
          className="w-full flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner-products-conexoes.png')",
            backgroundSize: "cover",
            minHeight: "225px",
          }}
        >
          <SecondTitle
            textSecondTitle="Conexões"
            className="text-first-color "
          />
        </div>
      </Link>

      <Link href="/products" className="w-full">
        <div
          className="w-full flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner-products-valvulas.png')",
            backgroundSize: "cover",
            minHeight: "225px",
          }}
        >
          <SecondTitle
            textSecondTitle="Válvulas"
            className="text-first-color "
          />
        </div>
      </Link>

      <Link href="/products" className="w-full">
        <div
          className="w-full flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner-products-combate.png')",
            backgroundSize: "cover",
            minHeight: "225px",
          }}
        >
          <SecondTitle
            textSecondTitle="Combate à Incêndio"
            className="text-first-color "
          />
        </div>
      </Link>

      <Link href="/products" className="w-full">
        <div
          className="w-full flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner-products-medicao.png')",
            backgroundSize: "cover",
            minHeight: "225px",
          }}
        >
          <SecondTitle
            textSecondTitle="Instrumentos de Medição"
            className="text-first-color "
          />
        </div>
      </Link>
    </section>
  );
};

export default ProductsSection;
