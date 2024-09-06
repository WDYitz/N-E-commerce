import { db } from "@/lib/prisma";
import { Category } from "@prisma/client";
import { notFound } from "next/navigation";

interface CategoryByNameType {
  category: Category;
}

export const getCategoryByName = async (name: string): Promise<CategoryByNameType> => {
  const category = await db.category.findFirst({
    where: {
      name,
    },
  });

  if (!category) {
    notFound();
  }

  return { category };
}