import {
  ALL_CONTENT_FAIL,
  ALL_CONTENT_REQUEST,
  ALL_CONTENT_SUCCESS,
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
                content: action.payload.contents,
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
