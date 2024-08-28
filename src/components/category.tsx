import { CategoryLinkType } from "@/data/links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

interface CategoryProps {
  category: CategoryLinkType;
  className?: string;
}

const Category = ({ category, className }: CategoryProps) => {
  // MEMORY PERFORMANCE: Avoid using string concatenation in the render method
  const URI_CATEGORY_PREFIX = "/category";
  const URI_HOME_PREFIX = "/";
  const url =
    category.url !== URI_HOME_PREFIX
      ? URI_CATEGORY_PREFIX + category.url
      : URI_HOME_PREFIX;

  return (
    <Button
      variant="ghost"
      className={cn("text-white w-full justify-start gap-2", className)}
      asChild
    >
      <Link href={url}>
        {category.icon}
        {category.name}
      </Link>
    </Button>
  );
};

export default Category;
