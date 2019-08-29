import React from 'react';
import {addLikeCreator, addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newText) => {
            dispatch(updateNewPostTextCreator(newText));
        },
        onAddPost: () => {
            dispatch(addPostCreator());
        },
        addLike : (postId) => {
            dispatch(addLikeCreator(postId));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;