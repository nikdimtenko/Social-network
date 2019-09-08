import React from 'react';
import userPhotos from '../../../img/avatar.png';
import style from './User.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


const User = (props) => {

    let countPage = Math.ceil(props.totalUsersCount / props.sizePage);
    let numberPage = [];
    for (let i = 1; i <= countPage; i++)
        numberPage.push(i);

    return (
        <div className={style.container}>
            <div className={style.listPage}>
                {
                    numberPage.map(page => <span
                    className={props.currentPage === page ? style.currentPage : style.otherPage}
                    onClick={() => props.onChangePage(page)}>{page}</span>)
                }
            </div>
            {props.users.map(user => <div className={style.field}>
            <span>
                <NavLink to={`/profile/${user.id}`}>
                    <div>
                        <img className={style.avatar} src={
                            user.photos.small === null ? userPhotos : user.photos.small}/>
                     </div>
                </NavLink>
                <div className={style.followButton}>
                    {user.followed ?
                        <button disabled={props.disableButtonStatus.some(id => id === user.id)}
                                onClick={() => props.unfollow(user.id)}>Unfollow
                        </button> :
                        <button disabled={props.disableButtonStatus.some(id => id === user.id)}
                                onClick={() => props.follow(user.id)}>Follow
                        </button>}
                </div>
            </span>
                <span className={style.previewRight}>
                <span className={style.description}>
                    <div className={style.fullName}>{user.name}</div>
                    <div className={style.status}>{user.status}</div>
                </span>
                <span className={style.location}>
                    <div>{"props.location.city"}</div>
                    <div className={style.country}>{"props.location.country"}</div>
                </span>
            </span>
            </div>)}
            {props.isFetching ? <Preloader/> : null}
        </div>
    );
};

export default User;