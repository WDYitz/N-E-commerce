import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@prisma/client";

interface BreadcrumbNavigatorProps {
  category?: string;
  product?: Pick<Product, "name">;
  categoryOnly?: boolean;
}

const BreadcrumbNavigator = ({
  categoryOnly,
  category,
  product,
}: BreadcrumbNavigatorProps) => {
  const CATEGORY_URI = `/category/${category}`;

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
              {category ?? "..."}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {!categoryOnly && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="" className="text-xs">
                  {product?.name ?? "..."}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNavigator;
