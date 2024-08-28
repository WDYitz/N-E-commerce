import BreadcrumbNavigator from "@/components/breadCrumbNavigator";
import FavoriteButton from "@/components/favoriteButton";
import Stars from "@/components/stars";
import { Separator } from "@/components/ui/separator";
import { productUseCase } from "@/useCases/products";
import { UUID } from "crypto";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: UUID;
  };
}
const ProductPage = ({ params }: ProductPageProps) => {
  const product = productUseCase.getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex flex-col p-5 space-y-4">
      <div className="pt-2 pb-2">
        <BreadcrumbNavigator product={product} />
      </div>
      <Separator />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2>{product?.name}</h2>
          <FavoriteButton />
        </div>
        <div className="flex">
          <Stars rating={product?.stars ?? 0} />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
