import {
  HeadphonesIcon,
  HomeIcon,
  LaptopIcon,
  Smartphone,
  TabletIcon,
  Watch,
} from "lucide-react";
import { ReactElement } from "react";

export interface CategoryLinkType {
  name: string;
  url: string;
  icon: ReactElement;
}

export const Links: CategoryLinkType[] = [
  {
    name: "Home",
    url: "/",
    icon: <HomeIcon size={18} className="text-primary" />,
  },
  {
    name: "Tablets",
    url: "/tablet",
    icon: <TabletIcon size={20} className="text-primary" />,
  },
  {
    name: "Phones",
    url: "/phone",
    icon: <Smartphone size={18} className="text-primary" />,
  },
  {
    name: "Earbuds",
    url: "/audio",
    icon: <HeadphonesIcon size={18} className="text-primary" />,
  },
  {
    name: "Smart W.",
    url: "/smartWatch",
    icon: <Watch size={20} className="text-primary" />,
  },
  {
    name: "Laptops",
    url: "/laptop",
    icon: <LaptopIcon size={18} className="text-primary" />,
  },
];
