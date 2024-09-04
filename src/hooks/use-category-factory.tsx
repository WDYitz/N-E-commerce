import { categoryUseCase } from "@/useCases/category";
import { productUseCase } from "@/useCases/products";

const useCategoryFactory = async (name: string) => {
  const category = await categoryUseCase.getCategoryByName(name);
  const products = await productUseCase.getProductsByCategoryId(category.id);

  return { category, products };
};

export default useCategoryFactory;
