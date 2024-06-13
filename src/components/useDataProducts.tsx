export default function useProducts() {
  interface dataSlideProps {
    id: string;
    imgCard: string;
    titleCard: string;
    href?: string;
    contentCard: string;
  }

  const dataSlideTubos: dataSlideProps[] = [
    {
      id: "1",
      imgCard: "/products/tubos-1.png",
      titleCard: "Tubos de aço carbono (com e sem costuras)",
      href: "https://wa.link/cl4xif",
      contentCard:
        "Versáteis e duráveis, os tubos de aço carbono são amplamente utilizados em aplicações industriais e estruturais.",
    },
    {
      id: "2",
      imgCard: "/products/tubos-2.png",
      titleCard: "Tubos de aço inoxidável",
      href: "https://wa.link/jd98s3",
      contentCard:
        "Resistência à corrosão e alta durabilidade fazem dos tubos de aço inoxidável uma escolha popular em ambientes agressivos.",
    },
    {
      id: "3",
      imgCard: "/products/tubos-3.png",
      titleCard: "Tubos de PVC",
      href: "https://wa.link/vz7voe",
      contentCard:
        "Leves e de fácil instalação, os tubos de PVC são ideais para sistemas de água potável, esgoto e drenagem.",
    },
    {
      id: "4",
      imgCard: "/products/tubos-4.png",
      titleCard: "Tubos de cobre",
      href: "https://wa.link/ylpg30",
      contentCard:
        "Excelente condutividade térmica e elétrica tornam os tubos de cobre ideais para sistemas de refrigeração, aquecimento e encanamento.",
    },
    {
      id: "5",
      imgCard: "/products/tubos-5.png",
      titleCard: "Tubos de alumínio",
      href: "https://wa.link/eq47xh",
      contentCard:
        "Leves e resistentes à corrosão, os tubos de alumínio são comumente usados em estruturas de construção e aplicações automotivas.",
    },
    {
      id: "6",
      imgCard: "/products/tubos-6.png",
      titleCard: "Tubos de ferro fundido",
      href: "https://wa.link/asay7x",
      contentCard:
        "Robustos e duráveis, os tubos de ferro fundido são adequados para sistemas de água, gás e vapor.",
    },
    {
      id: "7",
      imgCard: "/products/tubos-7.png",
      titleCard: "Tubos de PEAD",
      href: "https://wa.link/josayj",
      contentCard:
        "Excelente condutividade térmica e elétrica tornam os tubos de cobre ideais para sistemas de refrigeração, aquecimento e encanamento.",
    },
    {
      id: "8",
      imgCard: "/products/tubos-8.png",
      titleCard: "Tubos de PPR",
      href: "https://wa.link/bw4e9b",
      contentCard:
        "Leves, resistentes e com boa resistência térmica, os tubos de PPR são ideais para sistemas de água quente e fria em construções residenciais e comerciais.",
    },
  ];
  const dataSlideValvulas: dataSlideProps[] = [
    {
      id: "1",
      imgCard: "/products/valvulas-1.png",
      titleCard: "Válvulas de controle",
      href: "",
      contentCard:
        "Utilizadas para regular o fluxo de fluidos em sistemas industriais.",
    },
    {
      id: "2",
      imgCard: "/products/valvulas-2.png",
      titleCard: "Válvulas de retenção",
      href: "",
      contentCard: "Impedem o fluxo reverso de fluidos em tubulações.",
    },
    {
      id: "3",
      imgCard: "/products/valvulas-3.png",
      titleCard: "Válvulas de esfera",
      href: "",
      contentCard:
        "Controlam o fluxo de fluidos através da atuação de um campo magnético.",
    },
    {
      id: "4",
      imgCard: "/products/valvulas-4.png",
      titleCard: "Válvulas globo",
      href: "",
      contentCard:
        "Oferecem controle preciso do fluxo em sistemas de alta pressão e temperatura.",
    },
    {
      id: "5",
      imgCard: "/products/valvulas-5.png",
      titleCard: " Válvulas borboleta",
      href: "",
      contentCard:
        "Compactas e leves, as válvulas borboleta são ideais para aplicações onde espaço e peso são críticos.",
    },
    {
      id: "6",
      imgCard: "/products/valvulas-6.png",
      titleCard: "Válvulas de segurança",
      href: "",
      contentCard:
        "Protegem sistemas contra pressões excessivas, liberando fluído quando necessário.",
    },
    {
      id: "7",
      imgCard: "/products/valvulas-7.png",
      titleCard: "Válvulas solenoides",
      href: "",
      contentCard:
        "Controlam o fluxo de fluidos através da atuação de um campo magnético.",
    },
    {
      id: "8",
      imgCard: "/products/valvulas-8.png",
      titleCard: "Válvulas de agulha",
      href: "",
      contentCard:
        "Proporciona controle preciso do fluxo em aplicações de alta pressão e baixo volume.",
    },
  ];
  const dataSlideConexoes: dataSlideProps[] = [
    {
      id: "1",
      imgCard: "/products/conexoes-1.png",
      titleCard: "Conexões de aço carbono",
      href: "",
      contentCard:
        "Permitem a conexão de tubos de aço carbono em sistemas industriais e comerciais.",
    },
    {
      id: "2",
      imgCard: "/products/conexoes-2.png",
      titleCard: "Conexões de aço inoxidável",
      href: "",
      contentCard: "Oferecem resistência à corrosão em ambientes agressivos.",
    },
    {
      id: "3",
      imgCard: "/products/conexoes-3.png",
      titleCard: "Conexões de PVC",
      href: "",
      contentCard:
        "Proporcionam uma conexão segura e durável em sistemas de PVC.",
    },
    {
      id: "4",
      imgCard: "/products/conexoes-4.png",
      titleCard: "Conexões de cobre",
      href: "",
      contentCard:
        "Permitem a conexão de tubos de cobre em sistemas de água e gás.",
    },
    {
      id: "5",
      imgCard: "/products/conexoes-5.png",
      titleCard: "Conexões de ferro maleável",
      href: "",
      contentCard:
        "Robustas e confiáveis, as conexões de ferro maleável são adequadas para sistemas de água, gás e vapor.",
    },
    {
      id: "6",
      imgCard: "/products/conexoes-6.png",
      titleCard: "Conexões de latão",
      href: "",
      contentCard:
        "Oferecem boa resistência à corrosão e são ideais para aplicações em sistemas hidráulicos e pneumáticos.",
    },
    {
      id: "7",
      imgCard: "/products/conexoes-7.png",
      titleCard: "Conexões de polipropileno",
      href: "",
      contentCard:
        "Leves e resistentes, as conexões de polipropileno são utilizadas em sistemas de água potável e produtos químicos.",
    },
    {
      id: "8",
      imgCard: "/products/conexoes-8.png",
      titleCard: "Conexões de PEAD",
      href: "",
      contentCard: "Proporcionam uma conexão segura em sistemas de PEAD.",
    },
  ];
  const dataSlideIncendio: dataSlideProps[] = [
    {
      id: "1",
      imgCard: "/products/incendio-1.png",
      titleCard: "Mangueiras de incêndio",
      href: "",
      contentCard:
        "Essenciais para o combate a incêndios, as mangueiras são projetadas para fornecer água com pressão adequada.",
    },
    {
      id: "2",
      imgCard: "/products/incendio-2.png",
      titleCard: "Extintores de incêndio",
      href: "",
      contentCard:
        "Dispositivos portáteis para extinguir pequenos incêndios em emergências.",
    },
    {
      id: "3",
      imgCard: "/products/incendio-3.png",
      titleCard: "Sprinklers",
      href: "",
      contentCard:
        "Sistema de combate a incêndios automático que libera água quando detecta calor excessivo.",
    },
    {
      id: "4",
      imgCard: "/products/incendio-4.png",
      titleCard: "Sistemas de detecção de incêndio",
      href: "",
      contentCard:
        "Equipamentos para detectar e alertar sobre incêndios em estágios iniciais.",
    },
  ];
  const dataSlideMedicao: dataSlideProps[] = [
    {
      id: "1",
      imgCard: "/products/medicao-1.png",
      titleCard: "Manômetros",
      href: "",
      contentCard:
        "Instrumentos para medir a pressão de fluidos em sistemas industriais.",
    },
    {
      id: "2",
      imgCard: "/products/medicao-2.png",
      titleCard: "Termômetros",
      href: "",
      contentCard:
        "Utilizados para medir a temperatura de líquidos e gases em processos industriais.",
    },
    {
      id: "3",
      imgCard: "/products/medicao-3.png",
      titleCard: "Medidores de vazão",
      href: "",
      contentCard:
        "Instrumentos para medir a taxa de fluxo de fluidos em tubulações.",
    },
    {
      id: "4",
      imgCard: "/products/medicao-4.png",
      titleCard: "Medidores de nível",
      href: "",
      contentCard:
        "Utilizados para medir o nível de líquidos em tanques e reservatórios.",
    },
    {
      id: "5",
      imgCard: "/products/medicao-5.png",
      titleCard: "Instrumentos de calibração",
      href: "",
      contentCard:
        "Utilizados para medir o nível de líquidos em tanques e reservatórios.",
    },
  ];

  return {
    dataSlideTubos,
    dataSlideValvulas,
    dataSlideConexoes,
    dataSlideIncendio,
    dataSlideMedicao,
  };
}
