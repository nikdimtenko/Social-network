import React from 'react';
import s from './ProfileInfo.module.css';
import notPhotos from '../../../img/notPhotos2.png'

const ProfileInfo = (props) => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.avatar}
                     src={props.profileInfo.photos.large ? props.profileInfo.photos.large : notPhotos}/>
            </div>
            <div className={s.informationBlock}>
                <div className={s.name}>{props.profileInfo.fullName}</div>
                <div className={s.status}>{props.profileInfo.aboutMe}</div>
                <pre className={s.contacts}>VK:
                    <a href={props.profileInfo.contacts.vk}> {props.profileInfo.contacts.vk ?
                        props.profileInfo.contacts.vk : 'none'}
                     </a>
                </pre>
                <pre className={s.contacts}>Instagram:
                    <a href={props.profileInfo.contacts.instagram}> {props.profileInfo.contacts.instagram ?
                        props.profileInfo.contacts.instagram : 'none'}
                     </a>
                </pre>
            </div>

        </div>
    )
}

export default ProfileInfo;