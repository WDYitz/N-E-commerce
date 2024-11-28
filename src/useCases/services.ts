class Services {
  formatCurrency(value: number) {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(value);
  }

  createRating = (rating: number): number[] => {
    let stars = Array.from({ length: rating }, (_, index) => index + 1);

    if (rating === 0 || rating === undefined || rating === null) {
      stars = Array.from({ length: 5 }, (_, index) => index + 1);
    }
    return stars;
  }

  calculateProductsWithDiscount = (price: number, discountPercentage: number): number => {
    if (discountPercentage === 0) return Number(price);

    const discount = Number(price) * (discountPercentage / 100);

    return Number(price) - discount;
  };

  sanitizeValue = async (value: any): Promise<any> => {
    return JSON.parse(JSON.stringify(value));
  }
}

export const services = new Services();