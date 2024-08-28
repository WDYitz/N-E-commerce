import { db } from "@/lib/prisma";
import { Category, PrismaClient } from "@prisma/client";

class CategoryUseCase {
  constructor(private prismaRepository: PrismaClient) { }

  getAllCategories = async (): Promise<Category[]> => {
    const categories = await this.prismaRepository.category.findMany();
    return categories;
  }

  getCategoryById = async (id: string): Promise<Category | null> => {
    const category = await this.prismaRepository.category.findUnique({
      where: {
        id,
      },
    });

    return category;
  }

  getCategoryByName = async (name: string): Promise<Category | null> => {
    const category = await this.prismaRepository.category.findFirst({
      where: {
        name,
      },
    });

    return category;
  }

  getCategoryByProductId = async (productId: string): Promise<Category | null> => {
    const category = await this.prismaRepository.category.findFirst({
      where: {
        products: {
          every: {
            id: productId,
          },
        },
      }
    });

    return category;
  }

}

export const categoryUseCase = new CategoryUseCase(db);