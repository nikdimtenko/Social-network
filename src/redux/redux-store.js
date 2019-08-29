import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";
import historyDialogsReducer from "./historyDialogsReducer";
import findUsersReducer from "./findUsersReducer";

let reducers =  combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    historyDialogs: historyDialogsReducer,
    findUsers: findUsersReducer});

let store  = createStore(reducers);

export default store;