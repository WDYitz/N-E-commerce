import { Links } from "@/data/links";
import Category from "./category";

const CategoriesQuickSearch = () => {
  return (
    <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden flex gap-3">
      {Links.map(
        (link, index) =>
          link.url !== "/" && (
            <Category
              key={index}
              category={link}
              className="w-[150px] bg-secondary"
            />
          )
      )}
    </div>
  );
};

export default CategoriesQuickSearch;
