const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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