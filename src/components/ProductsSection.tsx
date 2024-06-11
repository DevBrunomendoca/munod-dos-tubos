import Image from "next/image";
import Link from "next/link";
import SecondTitle from "./SecondTitle";

const ProductsSection = () => {
  return (
    <section
      id="products-section"
      className="w-full px-2 py-8 grid grid-cols-1 items-center place-items-center gap-4 md:grid-cols-2"
      style={{ maxWidth: "1040px", margin: "0 auto" }}
    >
      <Link href="/products" className="w-full">
        <div
          className="flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner-products-tubos.png')",
            backgroundSize: "cover",
            minHeight: "225px",
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          <SecondTitle textSecondTitle="Tubos" className="text-first-color " />
        </div>
      </Link>

      <Link href="/products" className="w-full">
        <div
          className=" flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner-products-conexoes.png')",
            backgroundSize: "cover",
            minHeight: "225px",
            maxWidth: "520px",
            margin: "0 auto",
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
          className=" flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner-products-valvulas.png')",
            backgroundSize: "cover",
            minHeight: "225px",
            maxWidth: "520px",
            margin: "0 auto",
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
          className=" flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner-products-combate.png')",
            backgroundSize: "cover",
            minHeight: "225px",
            maxWidth: "520px",
            margin: "0 auto",
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
          className="flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner-products-medicao.png')",
            backgroundSize: "cover",
            minHeight: "225px",
            maxWidth: "520px",
            margin: "0 auto",
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
