import { getProductsByCategoryName } from "@/actions/product/getProductsByCategoryName.server";
import { productCardAnimations } from "@/animations/product-card-animation";
import BreadcrumbNavigator from "@/components/breadCrumbNavigator";
import ProductCardMotion from "@/components/motion-components/product-card";
import ProductCard from "@/components/motion-components/product-card";
import { Separator } from "@/components/ui/separator";

interface CategoryPageProps {
  params: {
    name: string;
  };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category } = await getProductsByCategoryName(params.name);

  return (
    <main className="flex flex-col p-5 space-y-4 sm:px-8 md:px-12 lg:px-28 2xl:px-52 min-h-[100vh]">
      <div className="pt-2 pb-2">
        <BreadcrumbNavigator category={category?.name} categoryOnly />
      </div>
      <Separator />
      <h2>{params.name.toLocaleUpperCase()}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {category?.products.map((product, index) => (
          <ProductCardMotion
            product={product}
            key={product.id}
            url={`${category.name}/${product.id}`}
            {...productCardAnimations}
            transition={{ delay: productCardAnimations["transition"].delay * index }}
          />
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
