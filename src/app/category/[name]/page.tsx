"use client";

interface CategoryPageProps {
  params: {
    name: string;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  return (
    <div>
      <p>{params.name}</p>
    </div>
  );
};

export default CategoryPage;
