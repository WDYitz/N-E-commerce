import { db } from "@/lib/prisma";
import { Category, Product } from "@prisma/client";

interface ProductsWithCategoriesType {
  products: Product[] & Pick<Category, 'id' | 'name'>[];
}

export const getProductsWithCategories = async (): Promise<ProductsWithCategoriesType> => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    },
    include: {
      category: {
        select: {
          id: true,
          name: true,
        }
      }
    }
  })


  return { products };
}