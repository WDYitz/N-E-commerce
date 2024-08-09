import { ItemType } from "@/data/products-data";
import { formatCurrency } from "@/services/formatCurrency";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  product: ItemType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="rounded-md shadow-md p-2">
      <CardContent className="flex justify-between items-center p-0 gap-4">
        <div className="relative min-w-[150px] h-[120px]">
          <Image
            src="/banner-01.jpg"
            alt={product.name}
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2 pr-4 justify-between">
          <h2 className="text-sm font-bold text-left w-full">{product.name}</h2>
          <span className="text-sm text-gray-500 uppercase">
            {product.description}
          </span>
          <div className="flex justify-between items-center">
            <span className="text-sm text-primary font-semibold w-[120px]">
              {formatCurrency(product.price)}
            </span>
            <Button variant="secondary">
              <span className="text-xs">Ver produto</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
