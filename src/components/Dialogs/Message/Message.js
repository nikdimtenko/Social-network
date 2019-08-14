import React from 'react';
import style from './Message.module.css';


const Message = (props) => {

    let checkOwner = () => {
        if (props.owner === 'im') {
            return <div className={style.im}> {props.message}</div>;
        }
        else
            return <div className={style.friend}> {props.message}</div>;
    }
    return checkOwner();
}

export default Message;