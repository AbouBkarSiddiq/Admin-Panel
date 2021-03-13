import axios from 'axios';
import {
  SET_IS_FETCHING_PRODUCTS,
  SET_IS_POSTING_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  DELETE_PRODUCT
} from '../Constants'
import {apiUrl} from "../../constants";
import {
  showToast
} from "../../utils";

const setIsFetching = (status) => {
  return({
    type: SET_IS_FETCHING_PRODUCTS,
    payload: status
  })
}

const setIsPosting = (status) => {
  return({
    type: SET_IS_POSTING_PRODUCT,
    payload: status
  })
}

export const addProduct = (data) => async dispatch => {
  try {
    setIsPosting(true);
    const res = await axios.post(`${apiUrl}admin/add-product`, data);
    if(res.data.status === 200) {
      showToast("success", res.data.message);
      dispatch({
        type: ADD_PRODUCT,
        payload: {
          id: res.data.id,
          name: data.name,
          description: data.description,
          categoryId: res.data.categoryId,
          image: res.data.image
        }
      });
    } else {
      setIsPosting(false);
      showToast("error", res.data.message);
    }
  } catch (error) {
    setIsPosting(false);
    showToast("error", error);
  }
}


export const editProduct = (data) => async dispatch => {
  try {
    setIsPosting(true);
    const res = await axios.post(`${apiUrl}admin/update-product`, data);
    if(res.data.status === 200) {
      showToast("success", res.data.message);
      dispatch({
        type: EDIT_PRODUCT,
        payload: {
          id: data.id,
          name: data.name,
          description: data.description,
          categoryId: data.categoryId,
          image: res.data?.image
        }
      });
    } else {
      setIsPosting(false);
      showToast("error", res.data.message);
    }
  } catch (error) {
    setIsPosting(false);
    showToast("error", error);
  }
}

export const getProductsByCategory = (data) => async dispatch => {
  try {
    setIsFetching(true);
    const res = await axios.post(`${apiUrl}admin/get-products-by-category`, data);
    if(res.data.status === 200) {
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORY,
        payload: res.data.products
      });
    } else {
      setIsFetching(false);
      showToast("error", res.data.message);
    }
  } catch (error) {
    setIsFetching(false);
    showToast("error", error);
  }
}

export const deleteProduct = (data) => async dispatch => {
  try {
    setIsPosting(true);
    const res = await axios.post(`${apiUrl}admin/delete-product`, data);
    if(res.data.status === 200) {
      showToast("success", res.data.message);
      dispatch({
        type: DELETE_PRODUCT,
        payload: {
          id: data.id
        }
      });
    } else {
      setIsPosting(false);
      showToast("error", res.data.message);
    }
  } catch (error) {
    setIsPosting(false);
    showToast("error", error);
  }
}