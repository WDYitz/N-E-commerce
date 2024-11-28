import FavoriteButton from "@/components/favoriteButton";
import Stars from "@/components/stars";
import { Badge } from "@/components/ui/badge";
import { Product } from "@prisma/client";
import { lazy } from "react";

const Image = lazy(() => import("next/image"));

interface ProductInfoProps {
  product: Product;
  hasStock: boolean;
  hasDiscount: boolean;
}

const ProductInfo = ({ product, hasStock, hasDiscount }: ProductInfoProps) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2>{product.name}</h2>
          <div className="flex gap-4 items-center">
            <span className="text-xs text-slate-300">
              qty: {product.quantity}
            </span>
            <FavoriteButton />
          </div>
        </div>

        <div className="flex">
          <Stars rating={product.stars ?? 0} />
        </div>
      </div>

      <div className="flex justify-center items-center py-2 lg:py-8">
        <div className="relative w-full max-w-[250px] h-[250px]">
          <Image
            alt={product.name}
            src={product.imageURL}
            fill
            sizes="100%"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-xs  text-slate-200 font-semibold">
          {hasStock ? "Em Estoque" : "Fora de Estoque"}
        </p>
        {hasDiscount && (
          <Badge variant="default" className="w-20 flex justify-center">
            {product.discountPercentage}% OFF
          </Badge>
        )}
      </div>
    </>
  );
};

export default ProductInfo;
