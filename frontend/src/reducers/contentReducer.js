import {
  ALL_CONTENT_FAIL,
  ALL_CONTENT_REQUEST,
  ALL_CONTENT_SUCCESS,
  CONTENT_DETAILS_REQUEST,
  CONTENT_DETAILS_FAIL,
  CONTENT_DETAILS_SUCCESS,
  CLEAR_ERROR,
} from "../constants/contentConstants";

export const contentReducer = (state = { contents: [] }, action) => {
    switch (action.type) {
        case ALL_CONTENT_REQUEST:
            return{
                loading: true,
                content: []
            }
            case ALL_CONTENT_SUCCESS:
            return{
                loading: false,
                contents: action.payload.contents,
                contentCount: action.payload.contentCount
            }
            case ALL_CONTENT_FAIL:
            return{
                loading: false,
                error: action.payload
            }
            case CLEAR_ERROR:
                return{
                    ...state,
                    error: null
                };
        default:
            return state;
    }
};

export const contentDetailsReducer = (state = { content: {} }, action) => {
    switch (action.type) {
        case CONTENT_DETAILS_REQUEST:
            return{
                loading: true,
                ...state
            }
            case CONTENT_DETAILS_SUCCESS:
            return{
                loading: false,
                content: action.payload.content
            }
            case CONTENT_DETAILS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
            case CLEAR_ERROR:
                return{
                    ...state,
                    error: null
                };
        default:
            return state;
    }
};

