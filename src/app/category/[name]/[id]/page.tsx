import { getProductByIdWithCategories } from "@/actions/product/getProductByIdWithCategories.server";
import { getProductsByCategoryId } from "@/actions/product/getProductsByCategoryId.server";
import BreadcrumbNavigator from "@/components/breadCrumbNavigator";
import { Separator } from "@/components/ui/separator";
import ProductDescription from "./_components/product-description";
import ProductInfo from "./_components/product-info";
import ProductPrices from "./_components/product-prices";
import RelatedProducts from "./_components/related-products";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { product, category, hasDiscount, hasStock } = await getProductByIdWithCategories(params.id);
  const { relatedProducts, hasRelatedProducts } = await getProductsByCategoryId(
    product.categoryId
  );

  return (
    <main className="flex flex-col p-5 space-y-4 sm:px-8 md:px-12 lg:px-28 2xl:px-52">
      <div className="pt-2 pb-2">
        <BreadcrumbNavigator product={product} category={category.name} />
      </div>

      <Separator />

      <ProductInfo
        product={product}
        hasStock={hasStock}
        hasDiscount={hasDiscount}
      />
      <ProductPrices product={product} hasStock={hasStock} />
      <ProductDescription product={product} />

      {hasRelatedProducts ? (
        <RelatedProducts
          relatedProducts={relatedProducts}
          paramsId={params.id}
          category={category}
        />
      ) : null}


    </main>
  );
};

export default ProductPage;
