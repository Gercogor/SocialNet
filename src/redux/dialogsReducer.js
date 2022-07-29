const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
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
};

export const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {
                id: 6,
                text: action.message,
            }
            let newState = {
                ...state,
                messages: [...state.messages, newMessage]
            };
            return newState;
        default:
            return state;
    }
}
export const addMessageActionCreator = (message) => {
    return {
        type: ADD_MESSAGE,
        message: message,
    }
}
