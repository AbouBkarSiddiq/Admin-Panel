import axios from 'axios';
import 
{
  SET_IS_FETCHING_CATEGORIES,
  SET_IS_POSTING_CATEGORY,
  GET_CATEGORIES,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  ADD_CATEGORY
} from '../Constants';
import {apiUrl} from "../../constants";
import {
  showToast
} from "../../utils";

const setIsFetching = (status) => {
  return({
    type: SET_IS_FETCHING_CATEGORIES,
    payload: status
  })
}

const setIsPosting = (status) => {
  return({
    type: SET_IS_POSTING_CATEGORY,
    payload: status
  })
}

export const getCategories = () => async dispatch => {
  try {
    setIsFetching(true);
    const res = await axios.get(`${apiUrl}/admin/get-categories`);
    if(res.data.status === 200) {
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data.categories
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

export const editCategory = (data) => async dispatch => {
  try {
    setIsPosting(true);
    const res = await axios.post(`${apiUrl}/admin/update-category`, data);
    if(res.data.status === 200) {
      showToast("success", res.data.message);
      dispatch({
        type: EDIT_CATEGORY,
        payload: {
          id: data.get('id'),
          name: data.get('name'),
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

export const deleteCategory = (data) => async dispatch => {
  try {
    setIsPosting(true);
    const res = await axios.post(`${apiUrl}/admin/delete-category`, data);
    if(res.data.status === 200) {
      showToast("success", res.data.message);
      dispatch({
        type: DELETE_CATEGORY,
        payload: {
          id: data.get('id')
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

export const addCategory = (data) => async dispatch => {
  try {
    setIsPosting(true);
    const res = await axios.post(`${apiUrl}/admin/add-category`, data);
    if(res.data.status === 200) {
      showToast("success", res.data.message);
      dispatch({
        type: ADD_CATEGORY,
        payload: {
          id: res.data.id,
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