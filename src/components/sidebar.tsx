"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "./ui/sheet";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* Menu Button */}
        <Button variant="secondary">
          <ShoppingCart size={22} className="text-white" fill="white" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col justify-between py-5">
          <div className="space-y-2">
            {/*  {products.map((product) => (
                  <CartItem key={product.id} cartProduct={product} />
                ))} */}
          </div>
          <div className="mt-6">
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center justify-between pb-2 text-xs">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{0}</span>
                </div>

                <div className="flex items-center justify-between border-b  text-xs">
                  {/*  {Number(products?.[0].restaurant.deliveryFee) === 0 ? (
                        <span className="uppercase text-primary">Grátis</span>
                      ) : (
                        formatCurrency(
                          Number(products?.[0].restaurant.deliveryFee)
                        )
                      )} */}
                </div>

                <div className="flex items-center justify-between border-b pb-2 pt-2 text-xs">
                  <span className="text-muted-foreground">Descontos</span>

                  <span>{0}</span>
                </div>

                <div className="flex items-center justify-between pb-2 pt-2 text-xs font-semibold">
                  <span>Total</span>
                  <span>{0}</span>
                </div>
              </CardContent>
            </Card>
            <Button className="mt-6 w-full font-light " onClick={() => {}}>
              Finalizar Compra
            </Button>
          </div>
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
