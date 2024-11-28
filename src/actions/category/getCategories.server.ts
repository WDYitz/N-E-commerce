import { db } from "@/lib/prisma";
import { Category } from "@prisma/client";
import { notFound } from "next/navigation";

export interface CategoriesType {
  categories: Category[];
}

export const getCategories = async (): Promise<CategoriesType> => {
  const categories = await db.category.findMany({
    include: {
      products: true
    }
  });

  if (!categories) {
    notFound();
  }

  return { categories };
}