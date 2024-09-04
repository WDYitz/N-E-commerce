import { productUseCase } from "@/useCases/products";

const useProductsFactory = async (id: string) => {
  const { category, product } =
    await productUseCase.getProductByIdWithCategories(id);

  const relatedProducts = await productUseCase.getProductsByCategoryId(
    category.id
  );


  return { category, product, relatedProducts };
};

export default useProductsFactory;
