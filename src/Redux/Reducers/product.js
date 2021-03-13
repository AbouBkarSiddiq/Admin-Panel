import {
  SET_IS_FETCHING_PRODUCTS,
  SET_IS_POSTING_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  DELETE_PRODUCT,
  LOGOUT_ADMIN
} from '../Constants';

const initialState = {
  products: [],
  isFetching: false,
  isPosting: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING_PRODUCTS: {
      return ({
        ...state,
        isFetching: action.payload
      });
    }

    case SET_IS_POSTING_PRODUCT: {
      return ({
        ...state,
        isPosting: action.payload
      });
    }

    case ADD_PRODUCT: {
      return ({
        ...state,
        isPosting: false,
        products: [...state.products, action.payload]
      });
    }

    case EDIT_PRODUCT: {
      const updatedProducts = [];
      state.products.forEach((product) => {
        if(product.id === action.payload.id) {
          const image = action.payload.image ? action.payload.image : product.image;
          updatedProducts.push({
            ...product,
            name: action.payload.name,
            description: action.payload.description,
            categoryId: action.payload.categoryId,
            image: image
          });
        } else {
          updatedProducts.push(product);
        }
      });
      return ({
        ...state,
        isPosting: false,
        products: updatedProducts
      });
    }

    case GET_PRODUCTS_BY_CATEGORY: {
      return ({
        ...state,
        isFetching: false,
        products: action.payload
      });
    }

    case DELETE_PRODUCT: {
      const updatedProducts = state.products.filter((product)=>(product.id!==action.payload.id));
      return ({
        ...state,
        isPosting: false,
        products: updatedProducts
      });
    }

    case LOGOUT_ADMIN:
      return initialState;

    default:
      return state;
  }
};

export default productReducer;