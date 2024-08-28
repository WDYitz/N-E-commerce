import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ItemType } from "@/data/products-data";

interface BreadcrumbNavigatorProps {
  product: Pick<ItemType, "category" | "name" | "id">;
}

const BreadcrumbNavigator = ({ product }: BreadcrumbNavigatorProps) => {
  const CATEGORY_URI = `/category/${product?.category}`;

  return (
    <Breadcrumb>
      <BreadcrumbList className="overflow-x-auto [&::-webkit-scrollbar]:hidden flex">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="text-xs">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="" className="text-xs text-gray-500">
              Category
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={CATEGORY_URI} className="text-xs">
              {product?.category ?? "..."}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="" className="text-xs">
              {product?.name ?? "..."}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNavigator;
