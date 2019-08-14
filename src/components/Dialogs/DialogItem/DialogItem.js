import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let sendId = () => {
        props.sendId(props.id);
    };

    return (
        <div className={`${s.mini} ${s.active}`}>
            <img src="https://images.wallpaperscraft.ru/image/pustynia_gory_doroga_144727_1920x1080.jpg"/>
            <NavLink onClick={sendId} to={'/dialogs/' + props.id} activeClassName={s.active} className={s.colorName} ><div>{props.name}</div></NavLink>
        </div>
    )
}

export default DialogItem;