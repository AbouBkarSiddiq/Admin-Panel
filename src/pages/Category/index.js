  
import React, { useEffect } from "react";
import categories from "../../data/categories";
import CategoryCard from "../../Components/Cards/CategoryCard";

export default function Home() {
  return (
    <div className="py-16">
      <h1
        className="py-8 text-center text-2xl font-bold text-blue-600"
      >
        Products Portfolio
      </h1>
      <div className="grid gap-4 xl:grid-cols-4 xl:px-14 xl:gap-8 lg:grid-cols-3 lg:px-12 md:grid-cols-2 md:px-8 sm:grid-cols-2 sm:px-8 px-6 sm:gap-2">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
}