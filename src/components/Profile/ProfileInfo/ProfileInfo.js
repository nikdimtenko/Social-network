import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.avatar}
                     src={props.profileInfo.imgSrc}/>
            </div>
            <div className={s.descriptionBlock}>{props.profileInfo.name}</div>

        </div>
    )
}

export default ProfileInfo;