import axios from "axios";

import {
  ALL_CONTENT_FAIL,
  ALL_CONTENT_REQUEST,
  ALL_CONTENT_SUCCESS,
  CLEAR_ERROR,
} from "../constants/contentConstants";

export const getAllContents = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CONTENT_REQUEST });
    const { data } = await axios.get("http://localhost:4000/api/v1/contents");
    dispatch({
      type: ALL_CONTENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CONTENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//For clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
