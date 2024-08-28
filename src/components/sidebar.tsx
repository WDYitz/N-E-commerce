"use client";
import { Links } from "@/data/links";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Category from "./category";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Sidebar = () => {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* Menu Button */}
        <Button variant="secondary" className="text-white">
          <MenuIcon size={20} className="text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        {/* Links */}
        <SheetClose asChild>
          <div className="mt-5 space-y-2">
            {Links.map((link, index) => (
              <Category
                key={index}
                category={link}
                className={
                  path === "/category" + link.url ? "bg-secondary" : ""
                }
              />
            ))}
          </div>
        </SheetClose>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
