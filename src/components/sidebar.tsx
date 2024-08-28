"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

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
        <SheetHeader></SheetHeader>
        {/* Links */}
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
