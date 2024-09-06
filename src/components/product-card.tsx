import { cn } from "@/lib/utils";
import { services } from "@/useCases/services";
import { Product } from "@prisma/client";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Stars from "./stars";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  product: Pick<
    Product,
    | "imageURL"
    | "name"
    | "id"
    | "stars"
    | "price"
    | "discountPercentage"
  >;
  url: string;
  className?: string;
}

const ProductCard = ({ className, url, product }: ProductCardProps) => {
  const hasDiscount = product.discountPercentage > 0;
  const productLink = `/category/${url}`;

  return (
    <Link href={productLink}>
      <Card className="rounded-md shadow-md p-3 min-w-[170px] h-[270px]">
        <CardContent
          className={cn(
            "flex flex-col items-center p-0 gap-4 w-full h-full relative pt-4",
            className
          )}
        >
          {hasDiscount && (
            <Badge className="absolute top-0 left-0 z-10">
              {product?.discountPercentage}% OFF
            </Badge>
          )}

          <div className="relative w-full h-[60%]">
            <Image
              src={product.imageURL ?? ""}
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
                  {hasDiscount &&
                    services.formatCurrency(Number(product.price))}
                </span>
                <span className="text-sm">
                  {services.formatCurrency(
                    services.calculateProductsWithDiscount({
                      price: product.price,
                      discountPercentage: product.discountPercentage,
                    })
                  )}
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
