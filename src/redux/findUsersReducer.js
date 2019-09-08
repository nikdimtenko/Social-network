import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_BUTTON_STATUS = 'BUTTON_STATUS';

let initializationState = {
    users: [],
    totalUsersCount: 0,
    sizePage: 20,
    currentPage: 1,
    isFetching: false,
    disableButtonStatus: []
};

const findUsersReducer = (state = initializationState, action) => {
    switch (action.type) {
        case FOLLOW: debugger
            return {
                ...state, users: [...state.users.map(user => {
                        if (user.id === action.userId) {
                            return {...user, followed: true};
                        }
                        return user;
                    }
                )]
            };
        case UNFOLLOW:
            return {
                ...state, users: [...state.users.map(user => {
                        if (user.id === action.userId) {
                            return {...user, followed: false};
                        }
                        return user;
                    }
                )]
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.totalUserCount};
        case SET_CURRENT_PAGE:
            return {...state, users: [], currentPage: action.currentPage};
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case SET_BUTTON_STATUS:
             let copy = {
                ...state, disableButtonStatus: action.status
                    ? [...state.disableButtonStatus, action.id]
                    : state.disableButtonStatus.filter(id => id !== action.id)
            };
            return copy;
        default:
            return state;
    }
};

export const acceptFollow = (userId) => ({type: FOLLOW, userId});
export const acceptUnfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUserCount = totalUserCount => ({type: SET_TOTAL_USER_COUNT, totalUserCount});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetching = isFetching => ({type: SET_IS_FETCHING, isFetching});
export const setButtonStatus = (id, status) => ({type: SET_BUTTON_STATUS, id, status});

export const getUsers = (currentPage, sizePage) => (dispatch) => {
    dispatch(setIsFetching(true));
    userAPI.getUsers(currentPage, sizePage)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
            dispatch(setIsFetching(false));
        });
};
export const changePage =(currentPage, sizePage) => (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    userAPI.getUsers(currentPage, sizePage)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setIsFetching(false));
        });
};
export const follow = (id) => (dispatch) => {
    dispatch(setButtonStatus(id, true));
    userAPI.follow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(acceptFollow(id));
            } else (console.error(data.messages));
            dispatch(setButtonStatus(id, false));
        });
};
export const unfollow = (id) => (dispatch) => {
    dispatch(setButtonStatus(id, true));
    userAPI.unfollow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(acceptUnfollow(id));
            } else (console.error(data.messages));
            dispatch(setButtonStatus(id, false));
        });
};

export default findUsersReducer;