const initialState = {
    Category: [],
  };
  
  const Category = (state = initialState, action) => {
    switch (action.type) {
      case " ADD_CATEGORY":
        return { Category: [...state.Category, action.payload] };
  
      default:
        return state;
    }
  };
  export default Category;