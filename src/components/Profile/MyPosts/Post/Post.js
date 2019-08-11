import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.img}>
                <img src={props.srcImg}/>
            </div>
            <div className={s.name}>
                {props.message}
            </div>
            <div className={s.text}>
                {props.like}
            </div>
            <div className={s.like}>
                <button>LIKE</button>

            </div>
        </div>
    );
}

export default Post;