import {
  CameraIcon,
  HeadphonesIcon,
  HomeIcon,
  LaptopIcon,
  Smartphone,
  SmartphoneCharging,
  TabletIcon,
  Watch,
} from "lucide-react";
import { ReactElement } from "react";

export interface CategoryType {
  name: string;
  url: string;
  icon: ReactElement;
}

export const LinksData: CategoryType[] = [
  {
    name: "Home",
    url: "/",
    icon: <HomeIcon size={18} className="text-primary" />,
  },
  {
    name: "Tablets",
    url: "/tablets",
    icon: <TabletIcon size={20} className="text-primary" />,
  },
  {
    name: "Phones",
    url: "/phones",
    icon: <Smartphone size={18} className="text-primary" />,
  },
  {
    name: "Earbuds",
    url: "/earbuds",
    icon: <HeadphonesIcon size={18} className="text-primary" />,
  },
  {
    name: "Smart W.",
    url: "/smartwatches",
    icon: <Watch size={20} className="text-primary" />,
  },
  {
    name: "Laptops",
    url: "/laptops",
    icon: <LaptopIcon size={18} className="text-primary" />,
  },
  {
    name: "Cameras",
    url: "/cameras",
    icon: <CameraIcon size={18} className="text-primary" />,
  },
  {
    name: "Accessories",
    url: "/accessories",
    icon: <SmartphoneCharging size={18} className="text-primary" />,
  },
];
