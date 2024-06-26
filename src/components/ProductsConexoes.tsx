"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useProducts from "./useDataProducts";
import ThirdTitle from "./ThirdTitle";
import Paragraph from "./Paragraph";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductsConexoes = () => {
  const { dataSlideConexoes } = useProducts();

  const [slidePreview, setSlidePreview] = useState<number>(2);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 550
        ? setSlidePreview(2)
        : innerWidth < 1024
        ? setSlidePreview(3)
        : setSlidePreview(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-2 py-8 ">
      <h2
        className="bg-second-color text-2xl text-first-color text-center px-10 py-3 "
        style={{ maxWidth: "200px", margin: "0 auto" }}
      >
        Conexões
      </h2>
      <Swiper
        loop={true}
        slidesPerView={slidePreview}
        centeredSlides={false}
        spaceBetween={0}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {dataSlideConexoes.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="w-fullc px-2 py-4 my-4 mx-2 flex flex-col items-center text-center gap-2 rounded-md"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}
            >
              <Image
                width={0}
                height={0}
                sizes="100vh"
                alt="Banner Produto"
                src={item.imgCard}
                style={{ width: "100%", height: "auto" }}
                placeholder="blur"
                blurDataURL={item.imgCard}
              />
              <ThirdTitle textThirdTilte={item.titleCard} />
              <Paragraph
                textColor="text-second-color"
                textParagraph={item.contentCard}
              />
              <a target="_blank" href={item.href}>
                <button className="bg-second-color text-first-color text-sm px-8 py-2 rounded-md hover:bg-fourth-color duration-500">
                  Orçameto
                </button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsConexoes;
