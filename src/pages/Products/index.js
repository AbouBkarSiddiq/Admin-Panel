import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { apiUrl } from '../../constants';
import { getProductsByCategory } from '../../Redux/Actions/product'
// import products from "../../data/products";
import ProductsCard from "../../Components/Cards/ProductsCard";

export default function Product(props) {
  const { name } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  useEffect(() => {
    dispatch(getProductsByCategory())
    window.scrollTo(0, 0);
    if (!products.hasOwnProperty(`${name}`)) {
      props.history.goBack();
    }
  }, []);

  return (
    <div className="md:py-8 md:px-8 sm:px-8 sm:py-10 py-20">
      {
        <div className="py-8">
          <h1
            className="text-blue-600 py-8 text-center text-2xl font-bold"
            style={{ fontFamily: "Ubuntu" }}
          >
            {name}
          </h1>
          <div className="grid gap-4 xl:grid-cols-4 xl:px-14 xl:gap-8 lg:grid-cols-3 lg:px-12 md:grid-cols-2 md:px-8 sm:grid-cols-2 sm:px-8 px-6 sm:gap-2">
            {products.hasOwnProperty(`${name}`) &&
              products[name].map((product) => (
                <ProductsCard product={`${apiUrl}/${product}`} categoryName={name}/>
              ))}
          </div>
        </div>
      }
    </div>
  );
}