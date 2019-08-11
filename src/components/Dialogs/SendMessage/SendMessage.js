import React from 'react';
import s from './SendMessage.module.css';

const SendMessage = (props) => {

    let refOfButton = React.createRef();

    let postMessage = () => {
        props.addMessage();
    };

    let updateTextMessage = () => {
        props.updateTextMessage(refOfButton.current.value);
    }

    return(
        <div className={s.sendMessage}>
            <textarea ref={refOfButton} onChange={updateTextMessage} value={props.textMessage} placeholder="Input your message"/>
            <button onClick={postMessage}>Post!</button>
        </div>
    );
}

export default SendMessage;