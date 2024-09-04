import CategoriesQuickSearch from "@/components/categories-quick-search";
import ProductCard from "@/components/product-card";
import Services from "@/components/services";
import { ServicesData } from "@/data/services-data";
import { productUseCase } from "@/useCases/products";
import Image from "next/image";

const Home = async () => {
  const { products } = await productUseCase.getAllProductsWithCategories();

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
                <ProductCard key={product.id} product={product} />
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
