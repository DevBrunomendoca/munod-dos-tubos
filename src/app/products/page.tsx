"use client";

import ProductsConexoes from "@/components/ProductsConexoes";
import ProductsIncendio from "@/components/ProductsIncendio";
import ProductsMedicao from "@/components/ProductsMedicao";
import ProductsTubos from "@/components/ProductsTubos";
import ProductsValvulas from "@/components/ProductsValvulas";
import Title from "@/components/Title";
import Image from "next/image";

const Products = () => {
  return (
    <>
      <section className="relative">
        <Image
          width={0}
          height={0}
          sizes="100vh"
          style={{ width: "100%", minHeight: "70vh" }}
          alt="Banner de produtos"
          src="/banner-products-page.png"
          className="object-cover"
        />
        <div className="absolute top-4 flex flex-col items-start justify-center h-full px-2">
          <Title textTitle="Descubra a Variedade Completa de Produtos que Oferecemos!" />
        </div>
      </section>
      <section className="flex flex-col">
        <ProductsTubos />
        <ProductsValvulas />
        <ProductsConexoes />
        <ProductsIncendio />
        <ProductsMedicao />
      </section>
    </>
  );
};

export default Products;
