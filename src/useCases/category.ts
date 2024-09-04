import { db } from "@/lib/prisma";
import { Category, PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

class CategoryUseCase {
  constructor(private prismaRepository: PrismaClient) { }

  getAllCategories = async (): Promise<Category[]> => {
    const categories = await this.prismaRepository.category.findMany();
    return categories;
  }

  getCategoryByName = async (name: string): Promise<Category> => {
    const category = await this.prismaRepository.category.findFirst({
      where: {
        name,
      },
    });

    if (!category) {
      notFound();
    }

    return category;
  }

}

export const categoryUseCase = new CategoryUseCase(db);