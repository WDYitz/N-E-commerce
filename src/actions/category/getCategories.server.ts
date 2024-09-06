import { db } from "@/lib/prisma";
import { Category } from "@prisma/client";
import { notFound } from "next/navigation";

interface CategoriesType {
  categories: Category[];
}

export const getCategories = async (): Promise<CategoriesType> => {
  const categories = await db.category.findMany();

  if (!categories) {
    notFound();
  }

  return { categories };
}