import { getCategories } from "@/actions/category/getCategories.server";
import { cn } from "@/lib/utils";
import CategoryLink from "./category";

const CategoriesQuickSearch = async ({ className }: { className?: string }) => {
  const { categories } = await getCategories();

  return (
    <div
      className={cn(
        "overflow-x-auto [&::-webkit-scrollbar]:hidden flex gap-3",
        className
      )}
    >
      {categories.map(
        (category) =>
          category.name !== "/" && (
            <CategoryLink
              key={category.id}
              category={category}
              className="w-[150px] bg-secondary"
            />
          )
      )}
    </div>
  );
};

export default CategoriesQuickSearch;
