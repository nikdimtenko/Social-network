import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let mapPostData = props.postData.map ( (p) => <div><Post message = {p.message} like = {p.like} srcImg={p.srcImg}/></div> );
    let newPostElement = React.createRef();

    let onChange = () => {
        props.updateNewPostText(newPostElement.current.value);
    }

    let addPost = () => {
        props.addPost();
    };

    return (
        <div>
            <div className={s.container}>
                <h3>My post</h3>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onChange} placeholder="Input post"/>
                    <div>
                        <button onClick={ addPost }>add post</button>
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