import { getProductsWithCategories } from "@/actions/product/getProductsWithCategories.server";
import CategoriesQuickSearch from "@/components/categories-quick-search";
import ProductCard from "@/components/product-card";
import Services from "@/components/services";
import { ServicesData } from "@/data/services-data";
import Image from "next/image";
import { Suspense } from "react";

const Home = async () => {
  const { products } = await getProductsWithCategories();

  
  return (
    <main className="flex flex-col p-5 space-y-4 ">
      <CategoriesQuickSearch />

      <div className="rounded-md p-5 relative w-full h-[140px]">
        <Image alt="Ofertas inperdiveis" src="/banner.png" fill priority />
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase text-neutral-500">
          Produtos em destaque
        </h2>
        <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-4 mt-4">
          {products.map(
            (product) =>
              product.stars > 4 && (
                <Suspense fallback={<div>Carregando...</div>} key={product.id}>
                  <ProductCard
                    key={product.id}
                    product={product}
                    url={`${product.categoryId}/${product.id}`}
                  />
                </Suspense>
              )
          )}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase text-neutral-500">
          por que nós escolher?
        </h2>
        <div className="flex flex-wrap gap-6 mt-4 justify-center">
          {ServicesData.map((service, index) => (
            <Services key={index} service={service} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
