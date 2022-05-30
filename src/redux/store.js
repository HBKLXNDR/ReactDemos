import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices";

const rootReducer = combineReducers({
    auth: authReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
}