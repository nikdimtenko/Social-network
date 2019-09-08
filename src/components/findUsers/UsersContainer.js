import {connect} from "react-redux";
import React from 'react';
import User from "./Users/User";
import {follow, getUsers, changePage, unfollow} from "../../redux/findUsersReducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0)
            this.props.getUsers(this.props.currentPage, this.props.sizePage);
    }

    onChangePage = (currentPage) => {
        this.props.changePage(currentPage, this.props.sizePage);
    };

    render() {
        debugger
        return <>
            <User users={this.props.users}
                  totalUsersCount={this.props.totalUsersCount}
                  sizePage={this.props.sizePage}
                  currentPage={this.props.currentPage}
                  disableButtonStatus={this.props.disableButtonStatus}
                  isFetching={this.props.isFetching}

                  onChangePage={this.onChangePage}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
            />
        </>
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.findUsers.users,
        sizePage: state.findUsers.sizePage,
        totalUsersCount: state.findUsers.totalUsersCount,
        currentPage: state.findUsers.currentPage,
        isFetching: state.findUsers.isFetching,
        disableButtonStatus: state.findUsers.disableButtonStatus
    }
};

export default connect(mapStateToProps,
    {
        follow, unfollow,
        getUsers, changePage
    })(UsersContainer);

