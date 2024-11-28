import { db } from "@/lib/prisma";
import { Category, Product } from "@prisma/client";
import { notFound } from "next/navigation";

interface ProductWithCategoriesType {
  product: Product;
  category: Pick<Category, 'id' | 'name'>
  hasDiscount: boolean;
  hasStock: boolean;
}

export const getProductByIdWithCategories = async (id: string): Promise<ProductWithCategoriesType> => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      category: true
    }
  })

  if (!product || !product.category) {
    notFound()
  }

  const hasDiscount = product?.discountPercentage > 0;
  const hasStock = product.quantity > 0;

  return { product, category: product.category, hasDiscount, hasStock };
}