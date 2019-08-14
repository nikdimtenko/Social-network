const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let initializationState = {

    textMessage: '',
        dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Zinka pul'},
        {id: 6, name: 'Zooo'},
        {id: 7, name: 'Spider'}
    ],
        messages: [
        {id: 1, message: 'Dimasdd'},
        {id: 1, message: 'DDDiii'},
        {id: 2, message: 'Svetafsds'},
        {id: 2, message: 'Verakika!!'},
        {id: 2, message: 'Chika chika'},
        {id: 3, message: 'Sshok'},
        {id: 4, message: 'Hi, anton'},
        {id: 4, message: 'anton hi'},
        {id: 5, message: 'Zfdfdsf2inka'},
        {id: 6, message: 'Park'},
        {id: 7, message: 'MAAn'}
    ]
};

const dialogsReducer = (state = initializationState, action) => {
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
