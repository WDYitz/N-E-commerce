import { CartProduct, useCart } from "@/contexts/cart.";
import {
  services
} from "@/useCases/services";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { forwardRef, memo } from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

type CartItemProps = {
  cartProduct: CartProduct;
};

const CartItem = forwardRef<HTMLDivElement, CartItemProps>(({ cartProduct }, ref) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useCart();

  const handleDecreaseQuantityClick = () =>
    decreaseProductQuantity(cartProduct.id);

  const handleIncreaseQuantityClick = () =>
    increaseProductQuantity(cartProduct.id);

  const handleRemovelick = () => removeProductFromCart(cartProduct.id);

  return (
    <div className="flex items-center justify-between" ref={ref}>
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12">
          <Image
            src={cartProduct.imageURL}
            alt={cartProduct.name}
            fill
            sizes="100%"
            className="rounded-lg object-scale-down"
          />
        </div>

        <div className="space-y-2 w-full">
          <h3 className="text-xs font-semibold">{cartProduct.name}</h3>
          <div className="flex items-center gap-1">
            <h4>
              {services.formatCurrency(
                services.calculateProductsWithDiscount(Number(cartProduct.price), cartProduct.discountPercentage) * cartProduct.quantity,
              )}
            </h4>
            {cartProduct.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {services.formatCurrency(
                  Number(cartProduct.price) * cartProduct.quantity,
                )}
              </span>
            )}
          </div>

          <div className="flex space-x-8 w-full flex-row">
            <div className="flex items-center gap-3 text-center">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 border border-solid border-muted-foreground"
                onClick={handleDecreaseQuantityClick}
              >
                <ChevronLeftIcon size={18} />
              </Button>
              <span className="w-4 text-sm">{cartProduct.quantity}</span>
              <Button
                size="icon"
                className="h-8 w-8"
                onClick={handleIncreaseQuantityClick}
              >
                <ChevronRightIcon size={18} />
              </Button>
            </div>
            <Button
              className="h-8 w-8 border border-solid border-muted-foreground"
              size="icon"
              variant="ghost"
              onClick={handleRemovelick}
            >
              <TrashIcon size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

CartItem.displayName = "CartItem";
const CartItemMotion = motion(CartItem);

export default memo(CartItemMotion);