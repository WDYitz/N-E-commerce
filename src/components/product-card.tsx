import { ProductType } from "@/data/products-data";
import { cn } from "@/lib/utils";
import { services } from "@/useCases/formatCurrency";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Stars from "./stars";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  product: ProductType;
  className?: string;
}

const ProductCard = ({ className, product }: ProductCardProps) => {
  return (
    <Link href={`/category/${product.category}/${product.id}`}>
      <Card className="rounded-md shadow-md p-3 min-w-[170px] h-[270px]">
        <CardContent
          className={cn(
            "flex flex-col items-center p-0 gap-4 w-full h-full",
            className
          )}
        >
          <div className="relative w-full h-[60%]">
            <Image
              src={product.image ?? ""}
              alt={product.name}
              fill
              sizes="100%"
              className="object-scale-down rounded-sm"
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
                  {services.formatCurrency(product.price)}
                </span>
                <span className="text-sm">
                  {services.formatCurrency(product.price - 250)}
                </span>
              </div>

              <Button variant="default" className="w-[45px] h-[45px] p-2">
                <ShoppingCartIcon size={20} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
