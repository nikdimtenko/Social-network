import React from 'react';
import s from './SendMessage.module.css';
import {sendMessageCreator, updateTextMessageCreator} from "../../../redux/dialogsReducer";

const SendMessage = (props) => {

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    };

    let updateTextMessage = (event) => {
        let value = event.target.value;
        props.dispatch(updateTextMessageCreator(value));
    };

    return(
        <div className={s.sendMessage}>
            <textarea onChange={updateTextMessage} value={props.textMessage} placeholder="Input your message"/>
            <button onClick={sendMessage}>Post!</button>
        </div>
    );
}

export default SendMessage;