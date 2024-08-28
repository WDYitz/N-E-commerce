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
        <p key={product?.id}>{product?.name}</p>
      ))}
    </main>
  );
};

export default CategoryPage;
