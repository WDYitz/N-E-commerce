import BreadcrumbNavigator from "@/components/breadCrumbNavigator";
import FavoriteButton from "@/components/favoriteButton";
import ProductCard from "@/components/product-card";
import Stars from "@/components/stars";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useProductsFactory from "@/hooks/use-products-factory";
import { services } from "@/useCases/services";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}
const ProductPage = async ({ params }: ProductPageProps) => {
  const { category, product, relatedProducts } = await useProductsFactory(
    params.id
  );

  if (!category || !product) {
    notFound();
  }

  const hasDiscount = product.discountPercentage > 0;

  return (
    <main className="flex flex-col p-5 space-y-4">
      <div className="pt-2 pb-2">
        <BreadcrumbNavigator product={product} category={category} />
      </div>
      <Separator />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2>{product.name}</h2>
          <div className="flex gap-4 items-center">
            <span className="text-xs text-slate-300">
              qty: {product.quantity}
            </span>
            <FavoriteButton />
          </div>
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
      <div className="flex justify-between items-center">
        <p className="text-xs  text-slate-200 font-semibold">
          {product.quantity < 1 ? "Fora de Estoque" : "Em Estoque"}
        </p>
        {hasDiscount && (
          <Badge variant="default" className="w-20 flex justify-center">
            {product.discountPercentage}% OFF
          </Badge>
        )}
      </div>
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
          Com descontos de
          <span className="font-bold"> {product.discountPercentage}%</span>
        </p>
        <Button>{product.quantity < 1 ? "Avise-me" : "Comprar"}</Button>
      </div>
      <div className="flex flex-col space-y-2 pt-6">
        <span className="uppercase font-semibold">produtos relacionados</span>
        <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-4">
          {relatedProducts.map(
            (product) =>
              product.id !== params.id && (
                <ProductCard
                  product={product}
                  key={product.id}
                  category={category}
                />
              )
          )}
        </div>
      </div>
      <div className="flex flex-col pt-6 space-y-2">
        <p className="uppercase font-semibold">descrição do produto</p>
        <p className="text-xs uppercase">{product.name}</p>
        <p className="text-xs">{product.description}</p>
      </div>
    </main>
  );
};

export default ProductPage;
