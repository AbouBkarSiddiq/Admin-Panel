  
import React, { useEffect } from "react";
import categories from "../../data/categories";
import CategoryCard from "../../Components/Cards/CategoryCard";

export default function Home() {
  return (
    <div className="py-8">
      <h1
        className="py-8 text-center text-2xl font-bold"
        style={{ color: "#098E46" }}
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