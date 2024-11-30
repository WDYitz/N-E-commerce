import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { motion } from "motion/react";
import Link from "next/link";
import { forwardRef, type MouseEventHandler } from "react";
import { Button } from "../ui/button";

interface CategoryProps {
  category: Category;
  className?: string;
  icon?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const CategoryLinks = forwardRef<HTMLButtonElement, CategoryProps>(({ category, className, icon, onClick }, ref) => {
  // MEMORY PERFORMANCE: Avoid using string concatenation in the render method
  const URI_CATEGORY_FULL_PREFIX = "/category/" + category.name;
  const URI_CATEGORY_SINGLE_PREFIX = "/" + category.name;
  const URI_HOME_PREFIX = "/";
  const url =
    URI_CATEGORY_SINGLE_PREFIX !== URI_HOME_PREFIX
      ? URI_CATEGORY_FULL_PREFIX
      : URI_HOME_PREFIX;

  return (
    <Button variant="ghost" asChild ref={ref} className="w-full flex justify-start py-6 lg:py-0" onClick={onClick}>
      <Link
        href={url}
        className={cn("hover:bg-transparent text-left w-full", className)}
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
