import type { Product } from "@prisma/client";
import { db } from "@/lib/prisma";

interface ProductsWithCategoriesType {
  products: Product[];
}

export const getProductsWithNoPromo = async ({ take }: { take?: number }): Promise<ProductsWithCategoriesType> => {
  try {
    const products = await db.product.findMany({
      where: {
        discountPercentage: {
          lte: 0
        }
      },
      take,
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
  } catch (e) {
    console.error(e);
    return { products: [] };
  }
}