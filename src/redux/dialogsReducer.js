const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE :
            let newMessage = {
                id: 10,
                message: state.textMessage
            };
            state.messages.push(newMessage);
            state.textMessage = '';
            return state;

        case UPDATE_TEXT_MESSAGE:
            state.textMessage = action.newText;
            return state;
    }
    return state;
};

export const sendMessageCreator = () => {
    return ({type: SEND_MESSAGE});
};
export let updateTextMessageCreator = (newText) => {
    return ({type: UPDATE_TEXT_MESSAGE, newText: newText});
};

export default dialogsReducer;
