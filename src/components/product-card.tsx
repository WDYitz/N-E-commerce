import { ItemType } from "@/data/products-data";
import { formatCurrency } from "@/services/formatCurrency";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Stars from "./stars";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  product: ItemType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="rounded-md shadow-md p-3 min-w-[170px] h-[270px]">
      <CardContent className="flex flex-col items-center p-0 gap-4 w-full h-full">
        <div className="relative w-full h-[50%]">
          <Image
            src="/banner-01.jpg"
            alt={product.name}
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2  justify-between w-full h-[50%]">
          <div className="space-y-1">
            <h2 className="text-sm text-left w-full tracking-wide line-clamp-1">
              {product.name}
            </h2>
            <div className="text-xs text-gray-500 uppercase flex gap-1">
              <Stars rating={product?.stars ?? 0} />
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-gray-400 line-through">
                {formatCurrency(product.price)}
              </span>
              <span className="text-sm">{formatCurrency(product.price - 250)}</span>
            </div>

            <Button variant="default" className="w-[45px] h-[45px] p-2">
              <ShoppingCartIcon size={20} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
