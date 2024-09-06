import { db } from "@/lib/prisma";
import { Category, PrismaClient, Product } from "@prisma/client";
import { notFound } from "next/navigation";

interface ProductWithCategoryType {
  product: Product;
  category: {
    id: string;
    name: string;
  };
}

interface ProductsWithCategoryType {
  products: Product[] & Pick<Category, 'id' | 'name'>[];
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

    if (!product || !product.category) {
      notFound()
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