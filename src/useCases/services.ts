import { Product } from "@prisma/client";

class Services {
  formatCurrency(value: number): string {
    return `R$ ${Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(Number(value))}`;
  }

  createRating = (rating: number): number[] => {
    let stars = Array.from({ length: rating }, (_, index) => index + 1);

    if (rating === 0 || rating === undefined || rating === null) {
      stars = Array.from({ length: 5 }, (_, index) => index + 1);
    }
    return stars;
  }

  calculateProductsWithDiscount = (product: Pick<Product, "price" | "discountPercentage">): number => {
    if (product.discountPercentage === 0) {
      return Number(product.price);
    }

    const discount = Number(product.price) * (product.discountPercentage / 100);

    return Number(product.price) - discount;
  };


}

export const services = new Services();