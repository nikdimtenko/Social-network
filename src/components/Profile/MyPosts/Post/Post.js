import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    const likeOnClick = () => {
    debugger;
        props.addLike(props.infoAboutPost.postId);
    };

    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <div>
                    <img src={props.infoAboutPost.srcImg}/>
                </div>
                <div className={s.text}>
                    <div className={s.name}>
                        Full Name
                    </div>
                    <div className={s.message}>
                        {props.infoAboutPost.message}
                    </div>
                </div>
            </div>
            <div className={s.like} onClick={likeOnClick}>
                <div className={s.text}>{props.infoAboutPost.like}</div>
                <button className={s.likeButt}>LIKE</button>
            </div>
        </div>
    );
}

export default Post;