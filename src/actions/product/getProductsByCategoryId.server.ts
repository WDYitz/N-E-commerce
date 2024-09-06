import { db } from "@/lib/prisma";
import { Product } from "@prisma/client";

interface ProductsByCategoryIdType {
  products: Product[]
}

export const getProductsByCategoryId = async (id: string): Promise<ProductsByCategoryIdType> => {
  const products = await db.product.findMany({
    where: {
      category: {
        id,
      },
    },
  });

  return { products };
}