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
import { categoryLinksAnimation } from "@/animations/category-links-animation";
import { useState } from "react";

interface NavbarProps {
  categories: Category[];
}

const Navbar = ({ categories }: NavbarProps) => {
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false);
  const isTabletOrHigher = useMedia("(min-width: 920px)", false);
  const isNotHomeRoute = categories.find((category) => category.name !== "/");

  const handleCloseNavbar = () => {
    setNavbar(prev => !prev);
  }

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
                initial={categoryLinksAnimation["initial"]}
                animate={{ scale: 1, backgroundColor: pathname === `/category/${category.name}` ? "#8161ff" : "transparent" }}
                transition={categoryLinksAnimation["transition"]}
              />
            )
        )}
      </ul>
    </nav>
  }

  return (
    <Sheet onOpenChange={setNavbar} open={navbar}>
      <SheetTrigger asChild>
        <Button variant="secondary">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-8 space-y-4">
        <SheetTitle className="sr-only">Categorias</SheetTitle>

        {categories.map(
          (category) =>
            isNotHomeRoute && (
              <CategoriesLink
                key={category.id}
                category={category}
                className={`w-[150px] text-left`}
                onClick={handleCloseNavbar}
                initial={categoryLinksAnimation["initial"]}
                animate={{ scale: 1, backgroundColor: pathname === `/category/${category.name}` ? "#8161ff" : "transparent" }}
                transition={categoryLinksAnimation["transition"]}
              />
            )
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
