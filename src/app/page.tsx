import Advantages from "@/components/advantages";
import CategoriesQuickSearch from "@/components/categories-quick-search";
import ProductCard from "@/components/product-card";
import { ProductsData } from "@/data/products-data";
import { ServicosData } from "@/data/servicos";
import Image from "next/image";

const Home = () => {
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
          {ProductsData.map(
            (product, index) =>
              index < 4 && <ProductCard key={index} product={product} />
          )}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase text-neutral-500">
          por que nós escolher?
        </h2>
        <div className="flex flex-wrap gap-6 mt-4 justify-center">
          {ServicosData.map((service, index) => (
            <Advantages key={index} service={service} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
