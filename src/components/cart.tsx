"use client";
import { useCart } from "@/contexts/cart.";
import { services } from "@/useCases/services";
import { ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import CartItemMotion from "./cart-item";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent, SheetFooter, SheetTitle, SheetTrigger } from "./ui/sheet";

const Cart = () => {
  const { products, totalPrice, subtotalPrice, totalQuantity, totalDiscounts } = useCart();
  const cartHasProducts = products.length > 0;

  const animationVariants = {
    cartItem: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
      transition: { type: "spring", duration: 0.5 },
    },
    cartBubble: {
      hidden: { scale: 0 },
      visible: { scale: 1 },
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative hover:bg-transparent">
          <ShoppingBag size={22} className="text-white" />
          {
            cartHasProducts &&
            (
              <motion.span
                className="text-xs rounded-full w-5 h-5 text-white bg-primary flex items-center justify-center absolute top-[-7px] right-2 z-[-100]"
                variants={animationVariants.cartBubble}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {totalQuantity}
              </motion.span>
            )
          }

        </Button>
      </SheetTrigger>
      <SheetContent className="w-full md:w-[400px] lg:w-[600px]">
        <SheetTitle>Carrinho</SheetTitle>
        <div className="flex h-full flex-col justify-between py-5">
          <div className="space-y-6 overflow-y-auto h-full overflow-x-hidden no-scrollbar">
            <AnimatePresence mode="sync">
              {products.map((product) => (
                <CartItemMotion
                  key={product.id}
                  cartProduct={product}
                  variants={animationVariants.cartItem}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={animationVariants.cartItem["transition"]}
                  layout
                />
              ))}
            </AnimatePresence>
          </div>
          <div className="mt-6">
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center justify-between pb-2 text-xs">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{services.formatCurrency(subtotalPrice)}</span>
                </div>

                <div className="flex items-center justify-between border-b text-xs" />

                <div className="flex items-center justify-between border-b pb-2 pt-2 text-xs">
                  <span className="text-muted-foreground">Descontos</span>
                  <span>{services.formatCurrency(totalDiscounts)}</span>
                </div>

                <div className="flex items-center justify-between pb-2 pt-2 text-xs font-semibold">
                  <span>Total</span>
                  <span>{services.formatCurrency(totalPrice)}</span>
                </div>
              </CardContent>
            </Card>
            <Button className="mt-6 w-full font-light " onClick={() => { }}>
              Finalizar Compra
            </Button>
          </div>
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
