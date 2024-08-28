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
      <h2>{params.name.toLocaleUpperCase()}</h2>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </main>
  );
};

export default CategoryPage;
