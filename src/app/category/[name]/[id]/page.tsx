import { getProductByIdWithCategories } from "@/actions/product/getProductByIdWithCategories.server";
import { getProductsByCategoryId } from "@/actions/product/getProductsByCategoryId.server";
import BreadcrumbNavigator from "@/components/breadCrumbNavigator";
import { Separator } from "@/components/ui/separator";
import ProductDescription from "./components/product-description";
import ProductInfo from "./components/product-info";
import ProductPrices from "./components/product-prices";
import RelatedProducts from "./components/related-products";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { product, category } = await getProductByIdWithCategories(params.id);
  const { products: relatedProducts } = await getProductsByCategoryId(
    product.categoryId
  );

  const hasDiscount = product?.discountPercentage > 0;
  const hasStock = product.quantity > 0;
  const hasRelatedProducts = relatedProducts.length > 0;

  return (
    <main className="flex flex-col p-5 space-y-4">
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

      {hasRelatedProducts ? (
        <RelatedProducts
          relatedProducts={relatedProducts}
          paramsId={params.id}
          category={category}
        />
      ) : null}

      <ProductDescription product={product} />
    </main>
  );
};

export default ProductPage;
