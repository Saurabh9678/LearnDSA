import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { contentDetailsReducer, contentReducer } from "./reducers/contentReducer";
import { userReducer } from "./reducers/userReducers";

const reducer = combineReducers({
    contents:contentReducer,
    contentDetails: contentDetailsReducer,
    user: userReducer,
});

let preloadedState = {};

const middleware = [thunk];

const store = createStore( 
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store