import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducerUsers} from "./user.reducer";
import {reducerPosts} from "./posts.reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({usersState: reducerUsers, postsState: reducerPosts});


export let store = createStore(reducers, applyMiddleware(thunk))
