import { getCategories } from "@/actions/category/getCategories.server";
import CategoryLink from "./category";

const CategoriesQuickSearch = async () => {
  const { categories } = await getCategories();

  return (
    <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden flex gap-3">
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
