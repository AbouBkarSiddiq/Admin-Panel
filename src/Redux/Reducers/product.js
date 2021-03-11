import 
{
ADD_PRODUCT,
EDIT_PRODUCT,
GET_PRODUCTS_BY_CATEGORY,
DELETE_PRODUCT
}
  from '../Constants'
const initialState = {
  products: {},
  isFetching: true
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return ({
        ...state,
        isFetching: false,
        products: action.payload
      });
    case EDIT_PRODUCT:
      return ({
        ...state,
        isFetching: false,
        products: action.payload
      });
    case GET_PRODUCTS_BY_CATEGORY:
      return ({
        ...state,
        isFetching: false,
        products: action.payload
      });
    case DELETE_PRODUCT:
      return ({
        ...state,
        isFetching: false,
        products: action.payload
      });

    default:
      return state;
  }
};

export default productReducer;