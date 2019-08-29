import React from 'react';
import userPhotos from '../../../img/avatar.png';
import style from './User.module.css';

const User = (props) => {

    let follow = (id) => {
        props.follow(id)
    };
    let unfollow = (id) => {
        props.unfollow(id);
    };

    let countPage = Math.ceil(props.totalUsersCount / props.sizePage);
    let numberPage = [];

    for (let i = 1; i <= countPage; i++)
        numberPage.push(i);


    return (
        <div className={style.container}>
            <div className={style.listPage}>
                {numberPage.map(page => <span
                    className={props.currentPage === page ? style.currentPage : style.otherPage}
                    onClick={() => props.onChangePage(page)}>{page}</span>)
                }
            </div>
            {props.findUsers.map(user => <div className={style.field}>
            <span className={style.previewLeft}>
                <div>
                    <img className={style.avatar} src={
                        user.photos.small === null ? userPhotos : user.photos.small}/>
                </div>
                <div className={style.followButton}>
                    {user.followed ?
                        <button onClick={() => unfollow(user.id)}>Unfollow</button> :
                        <button onClick={() => follow(user.id)}>Follow</button>}
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
        </div>
    );
};

export default User;