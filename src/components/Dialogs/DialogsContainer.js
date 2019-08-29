import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMyMessageCreator, setCurrentIdCreator, updateMyMessageCreator} from "../../redux/historyDialogsReducer";

let mapStateToProps = (state) => {
    return {
        dialogsItem: state.historyDialogs.dialogsItem,
        currentId: state.historyDialogs.currentId,
        Messages: state.historyDialogs.Messages,
        newMyTextMessage: state.historyDialogs.newMyTextMessage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMyMessageCreator());
        },
        updateTextMessage: (newText) => {
            dispatch(updateMyMessageCreator(newText));
        },
        sendId : (currentId) => {
            dispatch(setCurrentIdCreator(currentId));
         }
    }
};

const DialogsContainer =  connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;