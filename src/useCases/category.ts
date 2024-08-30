import { db } from "@/lib/prisma";
import { Category, PrismaClient } from "@prisma/client";

class CategoryUseCase {
  constructor(private prismaRepository: PrismaClient) { }

  getAllCategories = async (): Promise<Category[]> => {
    const categories = await this.prismaRepository.category.findMany();
    return categories;
  }

  getCategoryByName = async (name: string): Promise<Category | null> => {
    const category = await this.prismaRepository.category.findFirst({
      where: {
        name,
      },
    });

    return category;
  }

}

export const categoryUseCase = new CategoryUseCase(db);