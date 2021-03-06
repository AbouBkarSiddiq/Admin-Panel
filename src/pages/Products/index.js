  
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import ProductsCard from "../../Components/Cards/ProductsCard";

export default function Product(props) {
  const { name } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!products.hasOwnProperty(`${name}`)) {
      props.history.goBack();
    }
  }, []);

  return (
    <div className="">
      {
        <div className="py-8">
          <h1
            className="py-8 text-center text-2xl font-bold"
            style={{ color: "#098E46", fontFamily: "Ubuntu" }}
          >
            {name}
          </h1>
          <div className="md:px-8 flex justify-center md:justify-start sm:flex sm:justify-start  flex-wrap">
            {products.hasOwnProperty(`${name}`) &&
              products[name].map((product) => (
                <ProductsCard product={product} categoryName={name} />
              ))}
          </div>
        </div>
      }
    </div>
  );
}