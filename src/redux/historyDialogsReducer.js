const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';
const UPDATE_MY_MESSAGE = 'UPDATE-MY-MESSAGE';
const SET_CURRENT_ID = 'SET-CURRENT-ID';

let initializationState = {
    newMyTextMessage: '',
    currentId: 0,
    dialogsItem: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Zinaida'},
        {id: 6, name: 'Zooo'},
        {id: 7, name: 'Spider'}
    ],
    Messages: [
        {
            id: 1, message: [
                {count: 1, field: "it's my first(1) message", owner: 'im'},
                {count: 3, field: "it's my first(1) message", owner: 'im'},
                {count: 5, field: "5 message", owner: 'im'},
                {count: 6, field: "6) message", owner: 'im'},
                {count: 6, field: "Tolik", owner: 'im'}]
        },
        {
            id: 2,
            message: [{count: 2, field: "2!!!Friend!!!i number 11!!!", owner: 'im'}]
        },
        {
            id: 3,
            message: [{count: 2, field: "i Myyy message 3", owner: 'im'}]
        },
        {
            id: 4,
            message: [{count: 2, field: "i Myyy message 4", owner: 'im'}]
        },
        {
            id: 5,
            message: [{count: 2, field: "i Myyy message 5", owner: 'im'}]
        },
        {
            id: 6,
            message: [{count: 2, field: "i Myyy message 6", owner: 'im'}]
        },
        {
            id: 7,
            message: [{count: 2, field: "i Myyy message 7!", owner: 'im'}]
        }
    ]
};

const historyDialogsReducer = (state = initializationState, action) => {
    switch (action.type) {
        case ADD_MY_MESSAGE :
            let copyState = {...state};
            for (let i = 0; i < copyState.Messages.length; i++) {
                if (copyState.currentId === copyState.Messages[i].id) {
                    let lastMyIndex = copyState.Messages[i].message.length - 1;
                    let lastMyCount = copyState.Messages[i].message[lastMyIndex].count;
                    let newMessage = {
                        count: lastMyCount + 1,
                        field: copyState.newMyTextMessage[0] === '!' ? copyState.newMyTextMessage.substr(1) : copyState.newMyTextMessage,
                        owner: copyState.newMyTextMessage[0] === '!' ? 'friend' : 'im'
                    };
                    copyState.Messages[i].message = [...state.Messages[i].message, newMessage]
                }
            }
            copyState.newMyTextMessage = '';
            return copyState;
        case UPDATE_MY_MESSAGE :
            return {...state, newMyTextMessage: action.newText};
        case SET_CURRENT_ID :
            return {...state, currentId: action.currentId};

        default:
            return state;
    }
};

export const addMyMessageCreator = () => {
    return ({type: ADD_MY_MESSAGE});
};
export const updateMyMessageCreator = (newText) => {
    return ({type: UPDATE_MY_MESSAGE, newText: newText});
};
export const setCurrentIdCreator = (currentId) => {
    return ({type: SET_CURRENT_ID, currentId: currentId});
};

export default historyDialogsReducer;