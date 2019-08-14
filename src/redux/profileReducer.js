const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initializationState  = {

        newPostText: '',
        postData: [
            {
                id: 1,
                message: 'Hello Redux',
                like: 11,
                srcImg: "https://data2.logaster.com/image/logo/1/vagmi-collections-14423-240.png"
            },
            {
                id: 2,
                message: '3214',
                like: 28,
                srcImg: "https://www.logaster.ru/image/logo/1/matahari-15321-240.png"
            },
            {
                id: 3,
                message: 'Integral',
                like: 41,
                srcImg: "https://www.logaster.ru/image/logo/1/skyline-15226-240.png"
            },
            {
                id: 4,
                message: 'Parker v sadu',
                like: 12,
                srcImg: "https://www.logaster.ru/image/logo/1/stary-hrad-15305-240.png"
            },
            {
                id: 5,
                message: 'Komod shkaf',
                like: 17,
                srcImg: "https://www.logaster.ru/image/logo/1/bizon-13831-240.png"
            },
            {
                id: 6,
                message: 'Sosni rastut povsudu',
                like: 18,
                srcImg: "https://www.logaster.ru/image/logo/1/menur-15274-240.png"
            }
        ],
        profileInfo:
            {
                name: "Dmitry Nikitenka",
                imgSrc: "https://images.wallpaperscraft.ru/image/pustynia_gory_doroga_144727_1920x1080.jpg"
            }
    }

const profileReducer = (state = initializationState, action) => {
    switch (action.type) {

        case ADD_POST :

            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 3,
                srcImg: "https://www.logaster.ru/image/logo/1/menur-15274-240.png"
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText;
            return state;

        default :
            return state;
    }
};

export const addPostCreator = () => {
    return { type: ADD_POST };
};
export const updateNewPostTextCreator = (newText) => {
    return ({type: UPDATE_NEW_POST_TEXT, newText: newText});
};

export default profileReducer;