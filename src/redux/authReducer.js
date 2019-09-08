import {profileAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_AUTORISATION = 'SET-AUTORISATION';
const SET_PHOTOS = 'SET-PHOTOS';


let initializationState = {
    id: null,
    email: null,
    login: null,
    photos: null,
    isAuth: false
};

const authReducer = (state = initializationState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, id: action.data.id, email: action.data.email, login: action.data.login};
        case SET_AUTORISATION:
                return {...state, isAuth: !state.isAuth};
        case SET_PHOTOS:
            return {...state, photos: action.photos};
        default:
            return state;
    }
};

export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const setAuth = () => ({type: SET_AUTORISATION});
export const setPhotos = (photos) => ({type: SET_PHOTOS, photos});

export const getInfo = () =>(dispatch) => {
    profileAPI.authMe()
        .then(data => {
        if(!data.resultCode) {
            dispatch(setUserData( data.data.id, data.data.email, data.data.login));
            profileAPI.getProfile(data.data.id)
                .then(img => {
                dispatch(setPhotos(img.photos.small));
            });
            dispatch(setAuth());
        }
    })
}

export default authReducer;