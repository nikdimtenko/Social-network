import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.active  + ' ' + s.mini}>
            <img src="https://images.wallpaperscraft.ru/image/pustynia_gory_doroga_144727_1920x1080.jpg"/>
            <NavLink to={'/dialogs/' + props.id}><div>{props.name}</div></NavLink>
        </div>
    )
}

export default DialogItem;