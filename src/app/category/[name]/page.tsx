import BreadcrumbNavigator from "@/components/breadCrumbNavigator";
import ProductCard from "@/components/product-card";
import { categoryUseCase } from "@/useCases/category";
import { productUseCase } from "@/useCases/products";
import { Suspense } from "react";

interface CategoryPageProps {
  params: {
    name: string;
  };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const category = await categoryUseCase.getCategoryByName(params.name);

  if (!category) {
    return <div className="px-5 text-md text-slate-400">Category not found</div>;
  }

  const products = await productUseCase.getProductsByCategoryId(category.id);

  return (
    <main className="flex flex-col p-5 space-y-4">
      <div className="pt-2 pb-2">
        <BreadcrumbNavigator category={category} categoryOnly />
      </div>
      <h2>{params.name.toLocaleUpperCase()}</h2>
      <div className="grid grid-cols-1 gap-4">
        <Suspense fallback={<div>...Loading</div>}>
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              category={category}
            />
          ))}
        </Suspense>
      </div>
    </main>
  );
};

export default CategoryPage;
