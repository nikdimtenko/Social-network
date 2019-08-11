import React from 'react';
import s from '../Sitebar.module.css';


const Friend = (props) => {
    return (
        <div>
            <div className={s.friends}>
                <img src={props.imgSrc} />
                {props.name}
            </div>
        </div>
    )
};

export default Friend;
