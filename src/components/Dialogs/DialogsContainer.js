import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Dialogs from "./Dialogs";
import {
    addFriendMessage,
    addMyMessageCreator,
    setCurrentIdCreator,
    updateFriendMessageCreator,
    updateMyMessageCreator
} from "../../redux/historyDialogsReducer";


const DialogsContainer = (props) => {

    let store = props.store;
    let state = props.store.getState();
    let sendId = (currentId) => {
        store.dispatch(setCurrentIdCreator(currentId));
    };

    let pushingMessage = (myMessages, friendMessages) => {
        let result = [];
        let message = [];

        for(let id = 0; id < myMessages.length; id++) {
            for(let im = 0; im < myMessages[id].message.length; im++) {
                message.push({
                    count: myMessages[id].message[im].count,
                    field: myMessages[id].message[im].field,
                    owner: 'im'
                });
            }
            for(let im = 0; im < friendMessages[id].message.length; im++) {
                message.push({
                    count: friendMessages[id].message[im].count,
                    field: friendMessages[id].message[im].field,
                    owner: 'friend'
                });
            }
            result.push({id: id, message});
            message = [];
        }
       return sortMessage(result);
    };
    let sortMessage = (array) => {
        let temp = [];
        for(let i = 0; i < array.length; i++)
            for(let j = array[i].message.length - 1; j > 0; j--) {
                for(let ins = 0; ins < j; ins++)
                if(array[i].message[ins].count > array[i].message[ins+1].count) {
                    temp = array[i].message[ins];
                    array[i].message[ins] = array[i].message[ins+1];
                    array[i].message[ins+1] = temp;
                }
            }
        return array;
    };

    let testFunc = (message) => {
        let temp = [];
        if (message.id + 1 === state.historyDialogs.currentId) {
            for(let i = 0; i < message.message.length; i++)
            temp.push(<Message message={message.message[i].field} owner={message.message[i].owner}/>)
        }
            return temp;
    };

    let dialogsItem = state.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} sendId={sendId}/>);
    let allMessages = pushingMessage(state.historyDialogs.myMessages, state.historyDialogs.friendsMessages);
    let allMessagesInComponent = allMessages.map(testFunc);

    let sendMessage = () => {
        if(state.historyDialogs.isMyMessage === true)
            store.dispatch(addMyMessageCreator());
        else if(state.historyDialogs.isMyMessage === false)
            store.dispatch(addFriendMessage());
    };

    let updateTextMessage = (newText) => {

        if((state.historyDialogs.newMyTextMessage.length === 0) && newText === '!') {
            state.historyDialogs.isMyMessage = false;
        }
        if(state.historyDialogs.isMyMessage === true)
            store.dispatch(updateMyMessageCreator(newText));
        if(state.historyDialogs.isMyMessage === false)
            store.dispatch(updateFriendMessageCreator(newText));

    };


    return <Dialogs dialogsItem={dialogsItem}
                    allMessagesInComponent={allMessagesInComponent}
                    sendMessage={sendMessage}
                    updateTextMessage={updateTextMessage}
                    newMyTextMessage={state.historyDialogs.newMyTextMessage}/>
};

export default DialogsContainer;