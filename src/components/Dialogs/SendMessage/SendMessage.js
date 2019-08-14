import React from 'react';
import s from './SendMessage.module.css';

const SendMessage = (props) => {

    let onUpdateTextMessage = (event) => {
        props.updateTextMessage(event.target.value);
    };

    return(
        <div className={s.sendMessage}>
            <textarea onChange={onUpdateTextMessage} value={props.newMyTextMessage} placeholder="Input your message"/>
            <button onClick={props.sendMessage}>Post!</button>
        </div>
    );
}

export default SendMessage;