import { randomUUID } from "crypto";

type CategoryNameType = "phone" | "smartWatch" | "tablet" | "audio";

export interface ProductType {
  id: string;
  name: string;
  price: number;
  image?: string;
  description: string;
  category: CategoryNameType;
  stars?: number;
}

export const ProductsData: ProductType[] = [
  {
    id: randomUUID(),
    name: "Apple Iphone 8",
    price: 4600,
    image:
      "https://utfs.io/f/28a00227-abc3-485f-9f17-2b64f644f8ba-x5g3eb.png",
    description: "64GB 4.7 polegadas resolução de 1334x750 pixels",
    category: "phone",
    stars: 4,
  },
  {
    id: randomUUID(),
    name: "Apple Iphone 15 PRO",
    price: 6400,
    image:
      "https://utfs.io/f/977467ef-1e60-4077-940a-0c12e2df0764-x9a5jd.png",
    description: "256GB 6.1 polegadas resolução de 2532x1170 pixels",
    category: "phone",
    stars: 5,
  },
  {
    id: randomUUID(),
    name: "Smart Watch",
    price: 1200,
    image: "https://utfs.io/f/3b8d88f7-aa0a-4413-8a53-9bd4eb10918b-ng3e6d.png",
    description: "relogio inteligente",
    category: "smartWatch",
    stars: 4,
  },
  {
    id: randomUUID(),
    name: "Samsung Galaxy",
    price: 3300,
    image:
      "https://utfs.io/f/e0b86617-cc14-40ce-a22b-48f1ab4f5c4a-jedcq0.png",
    description: "64GB 4GB ram  5.5 polegadas",
    category: "phone",
    stars: 4,
  },
  {
    id: randomUUID(),
    name: "Apple Airpod",
    price: 340,
    image:
      "https://utfs.io/f/ebf012bd-e9c0-46ec-98fd-69a025390c66-nfx551.png",
    description: "fone de ouvido com bateria de 12hrs",
    category: "audio",
    stars: 5,
  },
  {
    id: randomUUID(),
    name: "Tablet 2023",
    price: 4000,
    image: "https://utfs.io/f/c1cdd971-3b43-4149-88a5-4371983b34e3-ekqzdm.png",
    description: "tablet modelo 2023",
    category: "tablet",
    stars: 4,
  },
  {
    id: randomUUID(),
    name: "Ipad PRO",
    price: 8000,
    image:
      "https://utfs.io/f/9b10f84e-b88e-46dd-9f7c-30762be87ea4-x1dwhv.png",
    description: "ipad PRO 256GB ",
    category: "tablet",
    stars: 5,
  },
  {
    id: randomUUID(),
    name: "Smart Watch 2022",
    price: 900,
    image:
      "https://utfs.io/f/3b8d88f7-aa0a-4413-8a53-9bd4eb10918b-ng3e6d.png",
    description: "relogio inteligente modelo 2022",
    category: "smartWatch",
    stars: 4,
  },
  {
    id: randomUUID(),
    name: "Samsung Galaxy 2022",
    price: 4200,
    image:
      "https://utfs.io/f/d0792637-6b8b-432e-b070-585b2ce0a114-xdmdbq.png",
    description: "Celular samsung 2022 512GB",
    category: "phone",
    stars: 5,
  },
  {
    id: randomUUID(),
    name: "Fone de ouvido 2023",
    price: 400,
    image:
      "",
    description: "fone de ouvido com bateria de 32hrs, aprova d' agua",
    category: "audio",
    stars: 4,
  },
];
