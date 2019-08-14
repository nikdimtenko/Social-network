const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';
const ADD_FRIEND_MESSAGE = 'ADD-FRIEND-MESSAGE';
const UPDATE_MY_MESSAGE = 'UPDATE-MY-MESSAGE';
const UPDATE_FRIEND_MESSAGE = 'UPDATE-FRIEND-MESSAGE';
const SET_CURRENT_ID = 'SET-CURRENT-ID';

let initializationState = {

    isMyMessage: true,
    newTextFriendMessage: '',
    friendsMessages: [
        { id: 1, message: [
            {count: 2, field: "Friend 1 message"},
            {count: 4, field: "Friend 2 message"},
            {count: 7, field: "Friend 2 message"},
            {count: 8, field: "Friend 2 message"},
            {count: 9, field: "Friend 2 message"} ]},
        { id: 2,
            message: [ {count: 1, field: "2!!!Friend!!!i number 11!!!"} ]
        },
        { id: 3,
            message: [ {count: 1, field: "2!!!Friend!!!i number 11!!!"} ]
        },
        { id: 4,
            message: [ {count: 1, field: "2!!!Friend!!!i number 11!!!"} ]
        },
        { id: 5,
            message: [ {count: 1, field: "2!!!Friend!!!i number 11!!!"} ]
        },
        { id: 6,
            message: [ {count: 1, field: "2!!!Friend!!!i number 11!!!"} ]
        },
        { id: 7,
            message: [ {count: 1, field: "2!!!Friend!!!i number 11!!!"} ]
        }
        ],
    newMyTextMessage: '',
    myMessages: [
        { id: 1, message: [
                {count: 1, field: "it's my first(1) message" },
                {count: 3, field: "it's my first(1) message" },
                {count: 5, field: "5 message" },
                {count: 6, field: "6) message"} ]},
        { id: 2,
            message: [ {count: 2, field: "2!!!Friend!!!i number 11!!!"} ]
        },
        { id: 3,
            message: [ {count: 2, field: "i Myyy message 3"} ]
        },
        { id: 4,
            message: [ {count: 2, field: "i Myyy message 4"} ]
        },
        { id: 5,
            message: [ {count: 2, field: "i Myyy message 5"} ]
        },
        { id: 6,
            message: [ {count: 2, field: "i Myyy message 6"} ]
        },
        { id: 7,
            message: [ {count: 2, field: "i Myyy message 7!"} ]
        }
    ],
    currentId: 0
};

const historyDialogsReducer = (state = initializationState, action) => {
    switch(action.type) {
        case ADD_MY_MESSAGE : {
            for(let i = 0; i < state.myMessages.length; i++) {
                if(state.currentId === state.myMessages[i].id) {
                    let lastMyIndex = state.myMessages[i].message.length - 1; // count my message by id
                    let lastMyCount = state.myMessages[i].message[lastMyIndex].count;
                    let lastFriendIndex = state.friendsMessages[i].message.length - 1;
                    let lastFriendCount = state.friendsMessages[i].message[lastFriendIndex].count;
                    let newCount = lastMyCount > lastFriendCount ? lastMyCount : lastFriendCount;
                    let newMessage = {
                        count: newCount + 1,
                        field: state.newMyTextMessage
                    };
                    state.myMessages[i].message.push(newMessage);
                }
            }
            state.newMyTextMessage = '';
            return state;
            }
        case UPDATE_MY_MESSAGE : {
            state.newMyTextMessage = action.newText;
            return state;
        }
        case ADD_FRIEND_MESSAGE : {
            state.newMyTextMessage = state.newMyTextMessage.substr(1);
                  for(let i = 0; i < state.friendsMessages.length; i++) {
                      if(state.currentId === state.myMessages[i].id) {
                          let lastMyIndex = state.myMessages[i].message.length - 1;
                          let lastMyCount = state.myMessages[i].message[lastMyIndex].count;
                          let lastFriendIndex = state.friendsMessages[i].message.length - 1;
                          let lastFriendCount = state.friendsMessages[i].message[lastFriendIndex].count;
                          let newCount = lastMyCount > lastFriendCount ? lastMyCount : lastFriendCount;
                          let newMessage = {
                              count: newCount + 1,
                              field: state.newMyTextMessage
                          };
                          state.friendsMessages[i].message.push(newMessage);
                      }
                  }
                  debugger;
                state.newMyTextMessage = '';
                state.isMyMessage = true;
                return state;
        }
        case UPDATE_FRIEND_MESSAGE : {
            state.newMyTextMessage = action.newText;
            return state;
        }
        case SET_CURRENT_ID : {
            state.currentId = action.currentId;
            return state;
        }
        default: return state;
    }
};

export const addMyMessageCreator = () => {
    return ({type: ADD_MY_MESSAGE});
};
export const updateMyMessageCreator = (newText) => {
    return ({type: UPDATE_MY_MESSAGE, newText: newText});
};
export const addFriendMessage = () => {
    return ({type:ADD_FRIEND_MESSAGE});
};
export const updateFriendMessageCreator = (newText) => {
    return ({type: UPDATE_FRIEND_MESSAGE, newText: newText});
};
export const setCurrentIdCreator = (currentId) => {
    return ({type: SET_CURRENT_ID, currentId: currentId});
};

export default historyDialogsReducer;