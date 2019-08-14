import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let store = props.store;
    let state = props.store.getState();

    let updateNewPostText = (newText) => {
        store.dispatch(updateNewPostTextCreator(newText));
    };

    let onAddPost = () => {
        store.dispatch(addPostCreator());
    };

    return <MyPosts newPostText={state.profilePage.newPostText}
                    postData={state.profilePage.postData}
                    updateNewPostText={updateNewPostText}
                    onAddPost={onAddPost}/>
}

export default MyPostsContainer;