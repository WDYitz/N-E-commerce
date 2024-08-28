"use client";
import { ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger
} from "./ui/sheet";

const Sidebar = () => {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* Menu Button */}
        <Button variant="ghost" className="text-white">
          <ShoppingCart size={24} className="text-primary" />
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
