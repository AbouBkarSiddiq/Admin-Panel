import axios from 'axios'
import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  DELETE_PRODUCT
} from '../Constants'

export const addProduct = () => async dispatch => {
  try {
    const res = await axios.get(`API/END-POINT`);
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    });
  } catch (error) {
    dispatch({

    });
  }
}


export const editProduct = () => async dispatch => {
  try {
    const res = await axios.get(`API/END-POINT`);
    dispatch({
      type: EDIT_PRODUCT,
      payload: res.data
    });
  } catch (error) {
    dispatch({

    });
  }
}

export const getProductsByCategory = () => async dispatch => {
  try {
    const res = await axios.get(`API/END-POINT`);
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY,
      payload: res.data
    });
  } catch (error) {
    dispatch({

    });
  }
}

export const deleteProduct = () => async dispatch => {
  try {
    const res = await axios.get(`API/END-POINT`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data
    });
  } catch (error) {
    dispatch({

    });
  }
}