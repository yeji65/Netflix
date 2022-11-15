import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./reducers"
import {configureStore} from "@reduxjs/toolkit"
import movieReducer from "./reducers/MovieReducer"

// let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
    reducer:{
        movie : movieReducer
    }
})
export default store;