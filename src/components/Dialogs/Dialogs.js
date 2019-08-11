import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Route from "react-router-dom/es/Route";
import SendMessage from "./SendMessage/SendMessage";

const Dialogs = (props) => {

    let dialogsItem = props.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
     let messageElement = props.dialogPage.messages.map(message => <Message message={message.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItem}
            </div>
            <div className={s.messageBackground}>
                <div className={s.messages}>
                     {messageElement}
                </div>
                <div className={s.sendMessage}>
                    <SendMessage textMessage={props.dialogPage.textMessage}
                                 dispatch={props.dispatch}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;