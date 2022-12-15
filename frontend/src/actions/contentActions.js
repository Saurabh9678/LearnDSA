import axios from "axios";

import {
  ALL_CONTENT_FAIL,
  ALL_CONTENT_REQUEST,
  ALL_CONTENT_SUCCESS,
  CONTENT_DETAILS_REQUEST,
  CONTENT_DETAILS_FAIL,
  CONTENT_DETAILS_SUCCESS,
  CLEAR_ERROR,
} from "../constants/contentConstants";

export const getAllContents = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CONTENT_REQUEST });

    let link = "http://localhost:4000/api/v1/contents"

    const { data } = await axios.get(link);
    
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

export const getContentDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CONTENT_DETAILS_REQUEST });

    let link = `http://localhost:4000/api/v1/content/&{id}`

    const { data } = await axios.get(link);
    
    dispatch({
      type: CONTENT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTENT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//For clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
