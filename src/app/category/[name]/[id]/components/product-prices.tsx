import { Button } from "@/components/ui/button";
import { services } from "@/useCases/services";
import { Product } from "@prisma/client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface ProductPricesProps {
  product: Product;
  hasStock: boolean;
}

const ProductPrices = ({ product, hasStock }: ProductPricesProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <span className="text-sm line-through">
        {services.formatCurrency(Number(product.price))}
      </span>
      <span className="text-xl text-primary font-bold">
        {services.formatCurrency(
          services.calculateProductsWithDiscount({
            price: product.price,
            discountPercentage: product.discountPercentage,
          })
        )}
      </span>
      <p className="font-light text-sm mb-4">
        Com descontos de
        <span className="font-bold"> {product.discountPercentage}%</span>
      </p>
      <div className="py-4">
        <Button
          variant="default"
          className="w-full h-12 uppercase font-semibold gap-2 cursor-pointer"
        >
          {hasStock ? (
            <>
              <ShoppingCart fill="white" />
              <Link href="">Comprar</Link>
            </>
          ) : (
            "Avise-me"
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductPrices;
