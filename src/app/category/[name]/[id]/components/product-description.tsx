import { Product } from "@prisma/client";

interface ProductDescriptionsProps {
  product: Product;
}

const ProductDescription = ({ product }: ProductDescriptionsProps) => {
  return (
    <div className="flex flex-col pt-6 space-y-2">
      <p className="uppercase font-semibold">descrição do produto</p>
      <p className="text-xs uppercase">{product.name}</p>
      <p className="text-xs">{product.description}</p>
    </div>
  );
};

export default ProductDescription;
