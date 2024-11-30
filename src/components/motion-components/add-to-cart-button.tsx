"use client"
import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "@/contexts/cart.";
import type { Product } from "@prisma/client";
import { motion } from "motion/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps {
  product: Product
  className: string
}

const AddToCartButton = forwardRef<HTMLButtonElement, AddToCartButtonProps>(({ product, className }, ref) => {
  const { addProductToCart } = useCart()
  const handleAddProductToCart = () => {
    addProductToCart({
      product: {
        ...product, quantity: 1,
      },
    });

  };

  return (
    <Button variant="default" className={cn(`w-[40px] h-[40px] p-2 lg:w-[50px] lg:h-[50px]`, className)} onClick={handleAddProductToCart} ref={ref}>
      <ShoppingBag size={20} />
    </Button>
  );
})

AddToCartButton.displayName = "AddToCartButton";
const AddToCartButtonMotion = motion(AddToCartButton);

export default AddToCartButtonMotion;