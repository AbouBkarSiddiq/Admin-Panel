
import React, { useEffect } from "react";
import products from "../../data/products";
import ProductsEditFormCard from "../../Components/Cards/ProductsEditFormCard";

export default function CategoryEditForm(props) {
    return (
        <div className="px-2">
            <ProductsEditFormCard
                key={props.location.state.product.name}
                name={props.location.state.product.name}
                description={props.location.state.product.description}
            />
        </div>
    );
}