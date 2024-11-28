"use client"
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart.";
import { services } from "@/useCases/services";
import { Product } from "@prisma/client";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

interface ProductPricesProps {
  product: Product;
  hasStock: boolean;
}

const ProductPrices = ({ product, hasStock }: ProductPricesProps) => {
  const [quantity] = useState(1);
  const { addProductToCart } = useCart()
  const productPriceWithDiscount = services.calculateProductsWithDiscount(Number(product.price), product.discountPercentage)

  const addToCart = () => {
    addProductToCart({
      product: {
        ...product, quantity,
      },
    });
  };

  return (
    <div className="flex flex-col space-y-1">
      <span className="text-sm line-through">
        {services.formatCurrency(Number(product.price))}
      </span>
      <span className="text-xl text-primary font-bold ">
        {services.formatCurrency(productPriceWithDiscount)}
      </span>
      <div className="font-light text-sm mb-4 lg:flex lg:items-center lg:justify-between space-y-2">
        <p>Com descontos de
          <span className="font-bold"> {product.discountPercentage}%</span>
        </p>
        {hasStock ? (
          <Button
            variant="default"
            className="w-full md:w-[300px] h-12 uppercase font-semibold gap-2 cursor-pointer"
            onClick={addToCart}
          >
            <ShoppingBag />
            <p>adicionar ao carrinho</p>
          </Button>
        ) : (
          <p className="text-sm uppercase">Produto indisponivel no momento</p>
        )}
      </div>
      <div className="py-4 ">

      </div>
    </div >
  );
};

export default ProductPrices;
