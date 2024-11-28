import { Category } from "@prisma/client";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion, useAnimate } from "motion/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CategoryProps {
  category: Category;
  className?: string;
  icon?: React.ReactNode;
}


const CategoryLinks = forwardRef<HTMLButtonElement, CategoryProps>(({ category, className, icon }, ref) => {
  // MEMORY PERFORMANCE: Avoid using string concatenation in the render method
  const URI_CATEGORY_FULL_PREFIX = "/category/" + category.name;
  const URI_CATEGORY_SINGLE_PREFIX = "/" + category.name;
  const URI_HOME_PREFIX = "/";
  const url =
    URI_CATEGORY_SINGLE_PREFIX !== URI_HOME_PREFIX
      ? URI_CATEGORY_FULL_PREFIX
      : URI_HOME_PREFIX;

  return (
    <Button variant="ghost" asChild ref={ref} className="text-left w-full">
      <Link
        href={url}
        className={cn("hover:bg-transparent", className)}
      >
        {icon}
        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
      </Link>
    </Button>
  );
})

CategoryLinks.displayName = "CategoriesLink";

const CategoryLinksMotion = motion(CategoryLinks);

export default CategoryLinksMotion;
