"use client"
import type { Category } from "@prisma/client";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMedia } from "react-use";
import CategoriesLink from "./motion-components/category";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import CategoryLinksMotion from "./motion-components/category";
import { stagger } from "motion/react";

interface NavbarProps {
  categories: Category[];
}

const Navbar = ({ categories }: NavbarProps) => {
  const pathname = usePathname()
  const isTabletOrHigher = useMedia("(min-width: 920px)", false);
  const isNotHomeRoute = categories.find((category) => category.name !== "/");

  if (isTabletOrHigher) {
    return <nav>
      <ul className="flex justify-center space-x-4">
        {categories.map(
          (category) =>
            isNotHomeRoute && (
              <CategoryLinksMotion
                key={category.id}
                category={category}
                className={`text-lg text-left transition-all`}
                initial={{ scale: 0, backgroundColor: "transparent" }}
                animate={{ scale: 1, backgroundColor: pathname === `/category/${category.name}` ? "#8161ff" : "transparent" }}
                whileDrag={{ backgroundColor: "#8161ff" }}
                transition={{ duration: stagger(0.2), type: "spring" }}
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
              isNotHomeRoute && (
                <CategoriesLink
                  key={category.id}
                  category={category}
                  className={`w-[150px] text-left`}
                  initial={{ scale: 0, backgroundColor: "transparent" }}
                  animate={{ scale: 1, backgroundColor: pathname === `/category/${category.name}` ? "#8161ff" : "transparent" }}
                  transition={{ duration: 0.3, type: "spring" }}
                />
              )
          )}
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
