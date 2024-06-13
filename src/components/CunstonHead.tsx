import Head from "next/head";

function CustomHead() {
  return (
    <Head>
      <title>Mundo do Tubos</title>
      <meta name="title" content="Mundo do Tubos" />
      <meta
        name="description"
        content="A mundo dos tubos é uma empresa especializada em vendas tubos e conexões industriais para diversos segmentos como construção civil, industriais, saneamento básico e sistemas hidráulicos"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mundo do Tubos" />
      <meta
        property="og:description"
        content="A mundo dos tubos é uma empresa especializada em vendas tubos e conexões industriais para diversos segmentos como construção civil, industriais, saneamento básico e sistemas hidráulicos"
      />
      <meta property="og:image" content="/banner-products-page.png" />

      <meta
        name="keywords"
        content="Tubos de aço carbono, Tubos de aço inoxidáve, Tubos de PVC, Tubos de cobre, Tubos de alumínio, Tubos de ferro fundido, Tubos de PEAD, Tubos de PPR, Válvulas de controle, Válvulas de retenção, Conexões de aço carbono, Conexões de aço inoxidável, Mangueiras de incêndio, Extintores de incêndio, Manômetros, Medidores de nível"
      />
    </Head>
  );
}

export default CustomHead;
