import BreadcrumbNavigator from "@/components/breadCrumbNavigator";
import FavoriteButton from "@/components/favoriteButton";
import Stars from "@/components/stars";
import { Separator } from "@/components/ui/separator";
import { productUseCase } from "@/useCases/products";
import { services } from "@/useCases/services";
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
      <div className="flex  justify-center items-center py-2">
        <div className="relative w-full max-w-[250px] h-[250px]">
          <Image alt={product.name} src={product.imageURL} fill />
        </div>
      </div>
      <p className="text-xs text-slate-400 font-semibold">
        {product.quantity < 1 ? "Fora de Estoque" : "Em Estoque"}
      </p>
      <div className="flex flex-col space-y-2">
        <span className="text-sm line-through">
          {services.formatCurrency(Number(product.price))}
        </span>
        <span className="text-xl text-primary font-bold">
          {services.formatCurrency(
            services.calculateProductsWithDiscount({
              price: product.price,
              discountPercentage: product.discountPercentage,
            })
          )}
        </span>
        <p className="font-light text-sm">
          Com descontos de{" "}
          <span className="font-bold">{product.discountPercentage}%</span>
        </p>
      </div>
    </main>
  );
};

export default ProductPage;
