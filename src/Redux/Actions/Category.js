import {
    ADD_CATEGORY,
    DELETE_CATEGORY
  } from "../Constants";
  
  const addCategory = (name, uploadImg) => {
    return (dispatch)=>{
      dispatch({
        type: ADD_CATEGORY,
        payload: name, uploadImg
      });
    }
  }
  
  const deleteCategory = (name, uploadImg) => {
    return (dispatch)=>{
      dispatch({
        type: DELETE_CATEGORY,
        payload: name, uploadImg
      });
    }
  }
  
  
  export {
    addCategory,
    deleteCategory
  };