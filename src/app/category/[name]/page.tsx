import BreadcrumbNavigator from "@/components/breadCrumbNavigator";
import ProductCard from "@/components/product-card";
import useCategoryFactory from "@/hooks/use-category-factory";

interface CategoryPageProps {
  params: {
    name: string;
  };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category, products } = await useCategoryFactory(params.name);

  return (
    <main className="flex flex-col p-5 space-y-4">
      <div className="pt-2 pb-2">
        <BreadcrumbNavigator category={category} categoryOnly />
      </div>
      <h2>{params.name.toLocaleUpperCase()}</h2>
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} category={category} />
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
