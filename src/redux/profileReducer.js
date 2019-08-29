const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_LIKE = 'ADD-LIKE';

let initializationState = {

    newPostText: '',
    postData: [
        {
            id: 1,
            postId: 1,
            message: 'Hello Redux',
            like: 11,
            srcImg: "https://data2.logaster.com/image/logo/1/vagmi-collections-14423-240.png"
        },
        {
            id: 2,
            postId: 2,
            message: '3214',
            like: 28,
            srcImg: "https://www.logaster.ru/image/logo/1/matahari-15321-240.png"
        },
        {
            id: 3,
            postId: 3,
            message: 'Integral',
            like: 41,
            srcImg: "https://www.logaster.ru/image/logo/1/skyline-15226-240.png"
        },
        {
            id: 4,
            postId: 4,
            message: 'Parker v sadu',
            like: 12,
            srcImg: "https://www.logaster.ru/image/logo/1/stary-hrad-15305-240.png"
        },
        {
            id: 5,
            postId: 5,
            message: 'Komod shkaf',
            like: 17,
            srcImg: "https://www.logaster.ru/image/logo/1/bizon-13831-240.png"
        },
        {
            id: 6,
            postId: 6,
            message: 'Sosni rastut povsudu',
            like: 18,
            srcImg: "https://www.logaster.ru/image/logo/1/menur-15274-240.png"
        },
    ],
    profileInfo:
        {
            id: 0,
            name: "Dmitry Nikitenka",
            imgSrc: "https://images.wallpaperscraft.ru/image/pustynia_gory_doroga_144727_1920x1080.jpg"
        }
}

const profileReducer = (state = initializationState, action) => {
    switch (action.type) {
        case ADD_POST :
            return {
                ...state, postData: [...state.postData, {
                    id: state.profileInfo.id,
                    postId: state.postData[state.postData.length - 1].postId++,
                    message: state.newPostText,
                    like: 0,
                    srcImg: state.profileInfo.imgSrc
                }],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT :
            return {...state, newPostText: action.newText};
        case ADD_LIKE :
            let stateCopy = {...state, postData: [...state.postData]};
            for (let post = 0; post < stateCopy.postData.length; post++) {
                if (stateCopy.postData[post].postId === action.postId) {
                    stateCopy.postData[post].like++;
                }
            }
            return stateCopy;
        default :
            return state;
    }
};

export const addPostCreator = () => {
    return {type: ADD_POST};
};
export const updateNewPostTextCreator = (newText) => {
    return ({type: UPDATE_NEW_POST_TEXT, newText: newText});
};
export const addLikeCreator = (postId) => {
    return ({type: ADD_LIKE, postId: postId})
};
export default profileReducer;