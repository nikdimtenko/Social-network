import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMyMessage, setCurrentId, updateMyMessage} from "../../redux/historyDialogsReducer";

let mapStateToProps = (state) => {
    return {
        dialogsItem: state.historyDialogs.dialogsItem,
        currentId: state.historyDialogs.currentId,
        Messages: state.historyDialogs.Messages,
        newMyTextMessage: state.historyDialogs.newMyTextMessage,
    }
};

const DialogsContainer =  connect(mapStateToProps, {addMyMessage, updateMyMessage, setCurrentId})(Dialogs);

export default DialogsContainer;