  
import React, { useEffect } from "react";
import categories from "../../data/categories";
import CategoryCard from "../../Components/Cards/CategoryCard";

export default function Home() {
  return (
    <div className="py-20 sm:py-20 md:py-20">
      <h1
        className="py-8 text-center text-2xl font-bold text-blue-600"
      >
        Products Portfolio
      </h1>
      <div className="md:px-8 flex sm:flex  flex-wrap">
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