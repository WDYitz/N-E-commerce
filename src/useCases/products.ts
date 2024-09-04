import { db } from "@/lib/prisma";
import { PrismaClient, Product } from "@prisma/client";

interface ProductWithCategoryType {
  product: Product;
  category: {
    id: string;
    name: string;
  };
}

interface ProductsWithCategoryType {
  products: Product[];
}

class ProductUseCase {
  constructor(private prismaRepository: PrismaClient) { }

  getAllProductsWithCategories = async (): Promise<ProductsWithCategoryType> => {
    const products = await this.prismaRepository.product.findMany({
      include: {
        category: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    });

    return { products };
  }

  getProductByIdWithCategories = async (id: string): Promise<ProductWithCategoryType> => {
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