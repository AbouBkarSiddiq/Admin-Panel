import axios from 'axios'
import { LOGIN_ADMIN } from '../Constants'

export const loginAdmin = () => async dispatch => {
  try {
    const res = await axios.get(`API/END-POINT`);
    dispatch({
      type: LOGIN_ADMIN,
      payload: res.data
    });
  } catch (error) {
    dispatch({

    });
  }
}