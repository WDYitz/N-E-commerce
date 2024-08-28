import BreadcrumbNavigator from "@/components/breadCrumbNavigator";
import ProductCard from "@/components/product-card";
import { productUseCase } from "@/useCases/products";

interface CategoryPageProps {
  params: {
    name: string;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const products = productUseCase.getProductsByCategory(params.name);

  return (
    <main className="flex flex-col p-5 space-y-4">
      <div className="pt-2 pb-2">
        <BreadcrumbNavigator product={products[0]} categoryOnly />
      </div>
      <h2>{params.name.toLocaleUpperCase()}</h2>
      <div className="grid grid-cols-2 ">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} className="flex"/>
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
