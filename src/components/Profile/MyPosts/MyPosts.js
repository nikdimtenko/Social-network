import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let mapPostData = props.postData.map ( (p) => <div><Post message = {p.message} like = {p.like} srcImg={p.srcImg}/></div> );

    let onUpdateNewPostText = (event) => {
        props.updateNewPostText(event.target.value);
    }

    return (
        <div>
            <div className={s.container}>
                <h3>Add new post</h3>
                <div>
                    <textarea onChange={onUpdateNewPostText} value={props.newPostText} placeholder="Input post"/>
                    <div>
                        <button onClick={ props.onAddPost }>add post</button>
                    </div>
                </div>
            </div>

            <div className={s.container}>
                <h3>List post</h3>
            </div>
            <div className={s.grid}>
                {mapPostData}
            </div>

        </div>
    );
}

export default MyPosts;