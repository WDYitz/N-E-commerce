import BreadcrumbNavigator from "@/components/breadCrumbNavigator";
import FavoriteButton from "@/components/favoriteButton";
import Stars from "@/components/stars";
import { Separator } from "@/components/ui/separator";
import { productUseCase } from "@/useCases/products";
import Image from "next/image";

import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}
const ProductPage = async ({ params }: ProductPageProps) => {
  const { category, product } =
    await productUseCase.getProductsByIdAndCategories(params.id);

  if (!category || !product) {
    notFound();
  }

  return (
    <main className="flex flex-col p-5 space-y-4">
      <div className="pt-2 pb-2">
        <BreadcrumbNavigator product={product} category={category} />
      </div>
      <Separator />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2>{product.name}</h2>
          <FavoriteButton />
        </div>
        <div className="flex">
          <Stars rating={product.stars ?? 0} />
        </div>
      </div>
      <div className="py-2 relative w-full max-w-[300px] min-h-[250px] flex justify-center items-center">
        <Image alt={product.name} src={product.imageURL} fill />
      </div>
    </main>
  );
};

export default ProductPage;
