
// export default User;
import React from "react";
import { useSelector } from "react-redux";

const Category = () => {
  const { category } = useSelector((data) => data);
  return (
    <div>
      <h1>Category</h1>
      {category ? (
        <div>
          {category.map((category) => (
            <div>
              <div>{category.name}</div>
              <div>{category.uploadImg}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 color="red"></h2>no data found
        </div>
      )}
    </div>
  );
};

export default Category;
