import { LinksData } from "@/data/links-data";
import Category from "./category";

const CategoriesQuickSearch = () => {
  return (
    <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden flex gap-3">
      {LinksData.map(
        (link, index) =>
          link.url !== "/" && (
            <Category key={index} category={link} className="w-[150px]" />
          )
      )}
    </div>
  );
};

export default CategoriesQuickSearch;
