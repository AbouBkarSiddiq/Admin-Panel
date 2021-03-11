import axios from 'axios';
import 
{
  GET_CATEGORIES,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  ADD_CATEGORY
} from '../Constants';

export const getCategories = () => async dispatch => {
  try {
    const res = await axios.get(`API/END-POINT`);
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    });
  } catch (error) {
    dispatch({

    });
  }
}

export const editCategory = () => async dispatch => {
  try {
    const res = await axios.get(`API/END-POINT`);
    dispatch({
      type: EDIT_CATEGORY,
      payload: res.data
    });
  } catch (error) {
    dispatch({

    });
  }
}

export const deleteCategory = () => async dispatch => {
  try {
    const res = await axios.get(`API/END-POINT`);
    dispatch({
      type: DELETE_CATEGORY,
      payload: res.data
    });
  } catch (error) {
    dispatch({

    });
  }
}

export const addCategory = () => async dispatch => {
  try {
    const res = await axios.get(`API/END-POINT`);
    dispatch({
      type: ADD_CATEGORY,
      payload: res.data
    });
  } catch (error) {
    dispatch({

    });
  }
}