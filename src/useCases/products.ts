import { db } from "@/lib/prisma";
import { PrismaClient, Product } from "@prisma/client";

interface ProductAndCategory {
  product: Product;
  category: {
    id: string;
    name: string;
  };
}

class ProductUseCase {
  constructor(private prismaRepository: PrismaClient) { }

  getAllProducts = async (): Promise<Product[]> => {
    const products = await this.prismaRepository.product.findMany();
    return products;
  }

  getProductsByIdAndCategories = async (id: string): Promise<ProductAndCategory> => {
    const product = await this.prismaRepository.product.findUnique({
      where: {
        id,
      },
      include: {
        category: true
      }
    });

    if (!product) {
      throw new Error("Product not found");
    }

    return { product, category: product.category };
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