import Advantages from "@/components/advantages";
import CategoriesQuickSearch from "@/components/categories-quick-search";
import ProductCard from "@/components/product-card";
import { ProdData } from "@/data/products-data";
import { ServicosData } from "@/data/servicos";

const Home = () => {
  return (
    <main className="flex flex-col p-5 space-y-4 ">
      <CategoriesQuickSearch />
      <div className="relative h-[100px]">
        <div className="bg-gradient-to-t from-zinc-900 absolute z-10 w-full h-full rounded-md p-5 ">
          <span className="text-sm absolute bottom-2">
            Fones de ouvido e muito mais aqui na{" "}
            <b className="uppercase text-lg">loja</b> da
            <b className="uppercase text-lg"> baixada</b>.
          </span>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase text-neutral-500">
          Produtos em destaque
        </h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {ProdData.map(
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
