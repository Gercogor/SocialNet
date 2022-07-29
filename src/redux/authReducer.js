import {authAPI} from "../components/API/API";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_AUTH = 'SET_IS_AUTH';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
            }
        case SET_IS_AUTH:
            return {
                ...state,
            }
        default :
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login,
            isAuth
        },
    }
}

export const authThunk = () => (dispatch) => {
    return authAPI.auth().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            let isAuth = true;
            dispatch(setAuthUserData(id, email, login, isAuth));
        }
    })
}
