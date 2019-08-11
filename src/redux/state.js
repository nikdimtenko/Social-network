let store = {
    _state: {
        dialogPage: {

            textMessage: '',
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Anton'},
                {id: 5, name: 'Zinka'},
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
            ],
        },

        profilePage: {

            newPostText: '',
            postData: [
                {
                    id: 1,
                    message: 'Hello',
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
    },

    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 3,
            srcImg: "https://www.logaster.ru/image/logo/1/menur-15274-240.png"
        };

        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    addMessage () {

        let newMessage = {
            id: 10,
            message: this._state.dialogPage.textMessage
        }
        this._state.dialogPage.messages.push(newMessage);
        this._state.dialogPage.textMessage = '';
        this._callSubscriber();
    },
    updateTextMessage (newText) {
        this._state.dialogPage.textMessage = newText;
        this._callSubscriber();
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch() {

    }
};

export default store;