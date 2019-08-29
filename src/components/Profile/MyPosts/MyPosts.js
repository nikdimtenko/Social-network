import React from 'react';
import s from './MyPosts.module.css';
import postsStyle from './Post/Post.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let mapPostData = props.postData.map ( (info) => <Post infoAboutPost = {info} key={info.id} addLike={props.addLike}/> );

    let onUpdateNewPostText = (event) => {
        props.updateNewPostText(event.target.value);
    };

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
            <div className={postsStyle.posts}>
                {mapPostData}
            </div>

        </div>
    );
}

export default MyPosts;