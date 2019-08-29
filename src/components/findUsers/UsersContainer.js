import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/findUsersReducer";
import {connect} from "react-redux";
import React from 'react';
import * as axios from "axios";
import User from "./Users/User";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.sizePage}`).then(response => {
            this.props.setUser(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
            this.props.setIsFetching(false);
        });
    }

    onChangePage = (currentPage) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.sizePage}`).then(response => {
            this.props.setUser(response.data.items);
            this.props.setIsFetching(false);
        });
    };

    render() {
        return <>
            <User findUsers={this.props.findUsers}
                  totalUsersCount={this.props.totalUsersCount}
                  sizePage={this.props.sizePage}
                  currentPage={this.props.currentPage}
                  onChangePage={this.onChangePage}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  isFetching={this.props.isFetching}/>
        </>
    }
};

const mapStateToProps = (state) => {
    return {
        findUsers: state.findUsers.users,
        totalUsersCount: state.findUsers.totalUsersCount,
        sizePage: state.findUsers.sizePage,
        currentPage: state.findUsers.currentPage,
        isFetching: state.findUsers.isFetching
    }
};
const mapStateToDispatch = (dispatch) => {
    return {
        follow: userId => dispatch(followAC(userId)),
        unfollow: userId => dispatch(unfollowAC(userId)),
        setUser: (users) => dispatch(setUsersAC(users)),
        setTotalUserCount: totalUserCount => dispatch(setTotalUserCountAC(totalUserCount)),
        setCurrentPage: currentPage => dispatch(setCurrentPageAC(currentPage)),
        setIsFetching: isFetching => dispatch(setIsFetchingAC(isFetching))
    }
};

export default connect(mapStateToProps, mapStateToDispatch)(UsersContainer);

