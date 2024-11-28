import { Category } from "@prisma/client";
import Link from "next/link";
import { Button } from "./ui/button";

interface CategoryProps {
  category: Category;
  className?: string;
  icon?: React.ReactNode;
}

const CategoriesLink = ({ category, className, icon }: CategoryProps) => {
  // MEMORY PERFORMANCE: Avoid using string concatenation in the render method
  const URI_CATEGORY_FULL_PREFIX = "/category/" + category.name;
  const URI_CATEGORY_SINGLE_PREFIX = "/" + category.name;
  const URI_HOME_PREFIX = "/";
  const url =
    URI_CATEGORY_SINGLE_PREFIX !== URI_HOME_PREFIX
      ? URI_CATEGORY_FULL_PREFIX
      : URI_HOME_PREFIX;

  return (
    <Button variant="ghost" asChild>
      <Link
        href={url}
        className={className}
      >
        {icon}
        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
      </Link>
    </Button>
  );
};

export default CategoriesLink;
