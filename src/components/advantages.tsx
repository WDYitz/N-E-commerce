import { ServicosDataType } from "@/data/servicos";
import { Card, CardContent } from "./ui/card";

interface AdvantagesProps {
  service: ServicosDataType;
}

const Advantages = ({ service }: AdvantagesProps) => {
  return (
    <Card className="p-5 h-[180px] w-[45%] hover:border-indigo-400 transition-all">
      <CardContent className="p-0 flex flex-col justify-between items-center gap-2">
        {service.icon}
        <h3 className="text-lg font-semibold text-neutral-300">
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
