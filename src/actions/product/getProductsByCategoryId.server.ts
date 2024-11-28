import { db } from "@/lib/prisma";
import { Product } from "@prisma/client";

interface ProductsByCategoryIdType {
  relatedProducts: Product[]
  hasRelatedProducts: boolean
}

export const getProductsByCategoryId = async (id: string): Promise<ProductsByCategoryIdType> => {
  const products = await db.product.findMany({
    where: {
      category: {
        id,
      },
    },
  });

  const hasRelatedProducts = products.length > 0;

  return { relatedProducts: products, hasRelatedProducts };
}