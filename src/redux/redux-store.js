import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";
import historyDialogsReducer from "./historyDialogsReducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

let reducers =  combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    historyDialogs: historyDialogsReducer,
    findUsers: findUsersReducer,
    auth: authReducer});

let store  = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;