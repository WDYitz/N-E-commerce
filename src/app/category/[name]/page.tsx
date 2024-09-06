import { getProductsByCategoryName } from "@/actions/product/getProductsByCategoryName.server";
import BreadcrumbNavigator from "@/components/breadCrumbNavigator";
import ProductCard from "@/components/product-card";

interface CategoryPageProps {
  params: {
    name: string;
  };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category } = await getProductsByCategoryName(params.name);

  return (
    <main className="flex flex-col p-5 space-y-4">
      <div className="pt-2 pb-2">
        <BreadcrumbNavigator
          category={category && category?.name}
          categoryOnly
        />
      </div>
      <h2>{params.name.toLocaleUpperCase()}</h2>
      <div className="grid grid-cols-1 gap-4">
        {category?.products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            url={`${category.name}/${product.id}`} 
          />
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
