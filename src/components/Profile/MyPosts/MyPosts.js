import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {

    let mapPostData = props.postData.map ( (p) => <div><Post message = {p.message} like = {p.like} srcImg={p.srcImg}/></div> );

    let updateNewPostText = (event) => {
        let value = event.target.value;
        props.dispatch(updateNewPostTextCreator(value));
    };

    let addPost = () => {
        props.dispatch(addPostCreator());
    };

    return (
        <div>
            <div className={s.container}>
                <h3>Add new post</h3>
                <div>
                    <textarea onChange={updateNewPostText} value={props.newPostText} placeholder="Input post"/>
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