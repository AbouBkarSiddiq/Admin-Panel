import
{
GET_CATEGORIES,
EDIT_CATEGORY,
DELETE_CATEGORY,
ADD_CATEGORY
}
from '../Constants'

const initialState = {
  categories: [],
  isFetching: true
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return ({
        ...state,
        isFetching: false,
        categories: action.payload
      });
    case EDIT_CATEGORY:
      return ({
        ...state,
        isFetching: false,
        categories: action.payload
      });
    case DELETE_CATEGORY:
      return ({
        ...state,
        isFetching: false,
        categories: action.payload
      });
    case ADD_CATEGORY:
      return ({
        ...state,
        isFetching: false,
        categories: action.payload
      });

    default:
      return state;
  }
};

export default categoryReducer;
