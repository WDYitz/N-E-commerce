import { db } from "@/lib/prisma";

export const getProductsByCategoryName = async (name: string) => {
  const category = await db.category.findUnique({
    where: {
      name,
    },
    include: {
      products: true,
    }
  });
  

  return { category };
}