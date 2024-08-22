export interface ItemType {
  name: string;
  price: number;
  image?: string;
  description: string;
  category: string;
  stars?: number;
}

export const ProdData: ItemType[] = [
  {
    name: "Apple Iphone 8",
    price: 4600,
    image:
      "https://utfs.io/f/28a00227-abc3-485f-9f17-2b64f644f8ba-x5g3eb.png",
    description: "64GB 4.7 polegadas resolução de 1334x750 pixels",
    category: "phone",
    stars: 4,
  },
  {
    name: "Apple Iphone 15 PRO",
    price: 6400,
    image:
      "/public/iphone15.png",
    description: "256GB 6.1 polegadas resolução de 2532x1170 pixels",
    category: "phone",
    stars: 5,
  },
  {
    name: "Smart Watch",
    price: 1200,
    image: "/public/smartWatch2023.png",
    description: "relogio inteligente",
    category: "smartWatch",
    stars: 4,
  },
  {
    name: "Samsung Galaxy",
    price: 3300,
    image:
      "/public/samsungGalaxy.png",
    description: "64GB 4GB ram  5.5 polegadas",
    category: "phone",
    stars: 4,
  },
  {
    name: "Apple Airpod",
    price: 340,
    image:
      "/public/airpod.png",
    description: "fone de ouvido com bateria de 12hrs",
    category: "audio",
    stars: 5,
  },
  {
    name: "Tablet 2023",
    price: 4000,
    image: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/169544",
    description: "tablet modelo 2023",
    category: "tablet",
    stars: 4,
  },
  {
    name: "Ipad PRO",
    price: 8000,
    image:
      "/public/ipadPro.png",
    description: "ipad PRO 256GB ",
    category: "tablet",
    stars: 5,
  },
  {
    name: "Smart Watch 2022",
    price: 900,
    image:
      "https://d2r9epyceweg5n.cloudfront.net/stores/001/173/492/products/u981-28c259f73417b0c5a416796617944098-480-0.png",
    description: "relogio inteligente modelo 2022",
    category: "smartWatch",
    stars: 4,
  },
  {
    name: "Samsung Galaxy 2022",
    price: 4200,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/br/sm-a235mlbgzto/gallery/br-galaxy-a23-sm-a235-sm-a235mlbgzto-531826303?$650_519_PNG$",
    description: "Celular samsung 2022 512GB",
    category: "phone",
    stars: 5,
  },
  {
    name: "Fone de ouvido 2023",
    price: 400,
    image:
      "https://img.freepik.com/vetores-gratis/composicao-realista-sem-fio-de-fones-de-ouvido-com-imagem-isolada-de-telefones-com-estacao-de-dock-de-banco-de-potencia-com-ilustracao-vetorial-de-reflexoes_1284-73201.jpg?w=826&t=st=1693247550~exp=1693248150~hmac=87ae144e8fc55b6526a06e6c43aa2c1106badbf666a42b569ca7e57d50c6c629",
    description: "fone de ouvido com bateria de 32hrs, aprova d' agua",
    category: "audio",
    stars: 4,
  },
];
