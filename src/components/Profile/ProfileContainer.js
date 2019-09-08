import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {connect} from "react-redux";
import {addLike, onAddPost, setProfileInfo, updateNewPostText} from "../../redux/profileReducer";
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1537;
        }
        this.props.setProfileInfo(userId);
    }


    render() {
        if (!this.props.profileInfo) {
            return <Preloader/>
        }
        return (
            <>
                <ProfileInfo profileInfo={this.props.profileInfo}/>
                <MyPosts newPostText={this.props.newPostText}
                         postData={this.props.postData}
                         updateNewPostText={this.props.updateNewPostText}
                         onAddPost={this.props.onAddPost}
                         addLike={this.props.addLike}/>
            </>
        );
    }
};

const mapStateToProps = (state) => {
    return ({
        profileInfo: state.profilePage.profileInfo,
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postData
    });
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    updateNewPostText,
    onAddPost,
    addLike,
    setProfileInfo
})(withUrlDataContainerComponent);