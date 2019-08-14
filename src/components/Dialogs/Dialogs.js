import React from 'react';
import s from './Dialogs.module.css';
import SendMessage from "./SendMessage/SendMessage";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsItem}
            </div>
            <div className={s.messageBackground}>
                <div className={s.messages}>
                    {props.allMessagesInComponent}
                </div>
                <div className={s.sendMessage}>
                    <SendMessage sendMessage={props.sendMessage}
                                 updateTextMessage={props.updateTextMessage}
                                 newMyTextMessage={props.newMyTextMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;