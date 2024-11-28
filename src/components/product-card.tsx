import { cn } from "@/lib/utils";
import { services } from "@/useCases/services";
import { Product } from "@prisma/client";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AddToCartButtonMotion from "./add-to-cart-button";
import Stars from "./stars";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  product: Product;
  url: string;
  className?: string;
}

const ProductCard = async ({ className, url, product }: ProductCardProps) => {
  const hasDiscount = product.discountPercentage > 0;
  const productLink = `/category/${url}`;
  const productPriceWithDiscount = services.calculateProductsWithDiscount(Number(product.price), product.discountPercentage)

  return (
    <Card className="rounded-md shadow-md p-3 min-w-[170px] h-[270px] relative">
      <Link href={productLink}>
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
            <Suspense fallback={<Loader2 className="animate-spin" size={16} />} >
              <Image
                src={product.imageURL ?? ""}
                alt={product.name}
                fill
                sizes="100%"
                className="object-scale-down rounded-sm"
                loading="eager"
              />
            </Suspense>
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
                    services.formatCurrency(
                      await services.sanitizeValue(
                        Number(product.price)
                      )
                    )
                  }
                </span>
                <span className="text-sm">
                  {services.formatCurrency(
                    Number(productPriceWithDiscount)
                  )}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
      <AddToCartButtonMotion product={product} whileTap={{ scale: 0.9, background: "#a8a8a8" }} transition={{ type: "spring", velocity: 2 }} className="absolute right-2 bottom-2" />
    </Card>
  );
};

export default ProductCard;
