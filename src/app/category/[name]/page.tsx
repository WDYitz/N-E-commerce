"use client";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  const params = useParams();
  return (
    <div>
      <p>{params.name}</p>
    </div>
  );
};

export default CategoryPage;
