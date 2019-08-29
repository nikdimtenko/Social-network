import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profileInfo={props.store.getState().profilePage.profileInfo}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;