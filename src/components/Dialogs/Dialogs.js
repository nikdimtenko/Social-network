import React from 'react';
import s from './Dialogs.module.css';
import SendMessage from "./SendMessage/SendMessage";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let testFunc = (message) => {
        let temp = [];
        if (message.id  === props.currentId) {
            for(let i = 0; i < message.message.length; i++)
            temp.push(<Message message={message.message[i].field} owner={message.message[i].owner}/>)
        }
            return temp;
    };

    let dialogsItem = props.dialogsItem.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} sendId={props.setCurrentId}/>);
    let messagesItem = props.Messages.map(testFunc);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItem}
            </div>
            <div className={s.messageBackground}>
                <div className={s.messages}>
                    {messagesItem}
                </div>
                <div className={s.sendMessage}>
                    <SendMessage sendMessage={props.addMyMessage}
                                 updateTextMessage={props.updateMyMessage}
                                 newMyTextMessage={props.newMyTextMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;