import {
  SET_IS_FETCHING_CATEGORIES,
  SET_IS_POSTING_CATEGORY,
  GET_CATEGORIES,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  ADD_CATEGORY,
  LOGOUT_ADMIN
} from '../Constants';

const initialState = {
  categories: [],
  isFetching: false,
  isPosting: false
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING_CATEGORIES: {
      return ({
        ...state,
        isFetching: action.payload
      });
    }

    case SET_IS_POSTING_CATEGORY: {
      return ({
        ...state,
        isPosting: action.payload
      });
    }

    case GET_CATEGORIES: {
      return ({
        ...state,
        isFetching: false,
        categories: action.payload
      });
    }

    case EDIT_CATEGORY: {
      const updatedCategories = [];
      state.categories.forEach((category) => {
        if(category.id === action.payload.id) {
          const image = action.payload.image ? action.payload.image : category.image;
          updatedCategories.push({
            ...category,
            name: action.payload.name,
            image: image
          });
        } else {
          updatedCategories.push(category);
        }
      });
      return ({
        ...state,
        isPosting: false,
        categories: updatedCategories
      });
    }

    case DELETE_CATEGORY: {
      const updatedCategories = state.categories.filter((category)=>(category.id!==action.payload.id));
      return ({
        ...state,
        isPosting: false,
        categories: updatedCategories
      });
    }

    case ADD_CATEGORY: {
      return ({
        ...state,
        isPosting: false,
        categories: [...state.categories, action.payload]
      });
    }

    case LOGOUT_ADMIN:
      return initialState;

    default:
      return state;
  }
};

export default categoryReducer;
