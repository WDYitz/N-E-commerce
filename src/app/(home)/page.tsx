import { getProductsWithCategories } from "@/actions/product/getProductsWithCategories.server";
import { getProductsWithNoPromo } from "@/actions/product/getProductsWithNoPromotion.server";
import ProductCard from "@/components/product-card";
import QuestionsAccordion from "@/components/questions-accordion";
import Services from "@/components/services";
import { ServicesData } from "@/data/services-data";
import Image from "next/image";

const Home = async () => {
  const { products: promoProducts } = await getProductsWithCategories({ take: 5 });
  const { products } = await getProductsWithNoPromo({ take: 15 });

  return (
    <main className="flex flex-col p-5 space-y-4 sm:px-8 md:px-12 lg:px-28 2xl:px-52 lg:space-y-12 min-h-[100vh]">
      <div>
        <h2 className="text-sm font-semibold uppercase text-neutral-500">
          Produtos em promoção
        </h2>
        <div className="w-full">
          <div className="flex gap-4 mt-4 overflow-x-auto no-scrollbar lg:grid lg:grid-cols-3">
            {promoProducts.map(
              (product) =>
                <ProductCard
                  key={product.id}
                  product={product}
                  url={`${product.categoryId}/${product.id}`}
                />
            )}
          </div>
        </div>
      </div>



      <div className="">
        <h2 className="text-sm font-semibold uppercase text-neutral-500">
          Nossos Produtos
        </h2>
        <div className="w-full">
          <div className="flex gap-4 mt-4 overflow-x-auto no-scrollbar lg:grid lg:grid-cols-3">
            {products.map(
              (product) =>
                <ProductCard
                  key={product.id}
                  product={product}
                  url={`${product.categoryId}/${product.id}`}
                />
            )}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase text-neutral-500">
          por que nós escolher?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
          {ServicesData.map((service, index) => (
            <Services key={index} service={service} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <QuestionsAccordion />
      </div>
    </main>
  );
};

export default Home;
