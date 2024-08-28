import { DollarSign, Megaphone, ShieldCheck, ThumbsUp } from "lucide-react";

export interface ServicesDataType {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const ServicesData: ServicesDataType[] = [
  {
    title: "Qualidade",
    description: "Produtos de qualidade com garantia de fábrica.",
    icon: <ThumbsUp size={32} className="text-primary" />,
  },
  {
    title: "Preço baixo",
    description: "Preços competitivos com o mercado.",
    icon: <DollarSign size={32} className="text-primary" />,
  },
  {
    title: "Entrega rápida",
    description: "Entrega rápida e segura para toda a baixada santista.",
    icon: <ShieldCheck size={32} className="text-primary" />,
  },
  {
    title: "Atendimento",
    description: "Atendimento personalizado e pós-venda.",
    icon: <Megaphone size={32} className="text-primary" />,
  },
];
