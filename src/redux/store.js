import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

let store = {
    _state: {
        profile: {
            posts: [
                {id: 1, text: "asdasdasdada", like: 213,},
                {id: 2, text: "dffdgncvfncf", like: 21,},
            ],
        },
        messages: {
            dialogs: [
                {id: 1, name: '123',},
                {id: 2, name: '24234',},
                {id: 3, name: '23423423',},
                {id: 4, name: '3463464 6346 34 634 63',},
            ],
            messages: [
                {id: 1, text: 'dsdsdfgdfgdsgsd',},
                {id: 2, text: 'dsdsdfgdfgdsgsd',},
            ],
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('qwerty');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.messages=dialogsReducer(this._state.messages, action)
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;