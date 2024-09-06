import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";

export const getProductsByCategoryName = async (name: string) => {
  const category = await db.category.findUnique({
    where: {
      name,
    },
    include: {
      products: true,
    }
  });

  if (!category) {
    notFound();
  }

  return { category };
}