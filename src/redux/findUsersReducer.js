const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

let initializationState = {
    users: [],
    totalUsersCount: 0,
    sizePage: 10,
    currentPage: 1
};

const findUsersReducer = (state = initializationState, action) => {
    switch (action.type) {
        case FOLLOW:
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
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalUserCountAC = totalUserCount => ({type: SET_TOTAL_USER_COUNT, totalUserCount});
export const setCurrentPageAC = currentPage => ({type: SET_CURRENT_PAGE, currentPage});

export default findUsersReducer;