import { db } from "@/lib/prisma";
import { PrismaClient, Product } from "@prisma/client";

class ProductUseCase {
  constructor(private prismaRepository: PrismaClient) { }

  getAllProducts = async (): Promise<Product[]> => {
    const products = await this.prismaRepository.product.findMany();
    return products;
  }

  getProductById = async (id: string): Promise<Product> => {
    const product = await this.prismaRepository.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  }

  getProductsByCategoryId = async (id: string): Promise<Product[]> => {
    const products = await this.prismaRepository.product.findMany({
      where: {
        category: {
          id,
        },
      },
    });

    return products;
  }

}

export const productUseCase = new ProductUseCase(db);