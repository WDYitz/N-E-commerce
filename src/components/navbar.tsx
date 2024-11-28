"use client"
import type { Category } from "@prisma/client";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMedia } from "react-use";
import CategoriesLink from "./category";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

interface NavbarProps {
  categories: Category[];
}

const Navbar = ({ categories }: NavbarProps) => {
  const pathname = usePathname()
  const isTabletOrHigher = useMedia("(min-width: 920px)", false);
  const isHomeURL = categories.find((category) => category.name === "/");

  if (isTabletOrHigher) {
    return <nav>
      <ul className="flex justify-center space-x-4">
        {categories.map(
          (category) =>
            !isHomeURL && (
              <CategoriesLink
                key={category.id}
                category={category}
                className={`text-lg ${pathname === `/category/${category.name}` ? "bg-primary" : "bg-transparent"}`}
              />
            )
        )}
      </ul>
    </nav>
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-8">
        <SheetTitle className="sr-only">Categorias</SheetTitle>
        <SheetClose className="flex flex-col space-y-2">
          {categories.map(
            (category) =>
              !isHomeURL && (
                <CategoriesLink
                  key={category.id}
                  category={category}
                  className={`w-[150px] text-left ${pathname === `/category/${category.name}` ? "bg-primary" : "bg-transparent"}`}
                />
              )
          )}
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
