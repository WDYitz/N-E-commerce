class Services {
  formatCurrency(value: number): string {
    return `R$ ${Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(value)}`;
  }
}

export const services = new Services();