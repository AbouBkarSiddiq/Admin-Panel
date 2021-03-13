
import React, { useEffect } from "react";
import CategoryEditFormCard from "../../Components/Cards/CategoryEditFormCard";

export default function CategoryEditForm(props) {
    return (
        <div className="px-2">
            <CategoryEditFormCard
                key={props.location.state.category.id}
                id={props.location.state.category.id}
                name={props.location.state.category.name}
                image={props.location.state.category.image}
            />
        </div>
    );
}