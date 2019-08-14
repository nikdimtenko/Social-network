import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import historyDialogsReducer from "./historyDialogsReducer";

let reducers =  combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    historyDialogs: historyDialogsReducer });

let store  = createStore(reducers);

export default store;