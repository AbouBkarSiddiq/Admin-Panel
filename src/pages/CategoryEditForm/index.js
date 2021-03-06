
import React, { useEffect } from "react";
import categories from "../../data/categories";
import CategoryEditFormCard from "../../Components/Cards/CategoryEditFormCard";

export default function CategoryEditForm(props) {
    console.log(props.location.state.product.name)
    console.log(props.location.state.product.image)
    return (
        <div className="px-2">
            <CategoryEditFormCard
                key={props.location.state.product.name}
                name={props.location.state.product.name}
                image={props.location.state.product.image}
            />
        </div>
    );
}