import { ServicosDataType } from "@/data/servicos";
import { Card, CardContent } from "./ui/card";

interface AdvantagesProps {
  service: ServicosDataType;
}

const Advantages = ({ service }: AdvantagesProps) => {
  return (
    <Card className="p-2 h-[230px] w-[46%] hover:border-indigo-400 transition-all">
      <CardContent className="p-0 flex flex-col justify-center items-center gap-3 h-full">
        {service.icon}
        <h3 className="text-md font-semibold text-neutral-300">
          {service.title}
        </h3>
        <p className="text-sm text-neutral-400 text-center">
          {service.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default Advantages;
