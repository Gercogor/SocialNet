import {authAPI} from "../components/API/API";
import {authThunk, setAuthUserData} from "./authReducer";

const ERROR_MESSAGE = "ERROR_MESSAGE";

const initialState = {
    email: null,
    password: null,
    remember: false,
    errorText: false,
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case ERROR_MESSAGE:
            return {
                ...state,
                errorText: action.payload,
            }
        default:
            return state
    }
}

export const loginThunk = (loginForm) => async (dispatch) => {
    let data = await  authAPI.login(loginForm);
    if (data.resultCode === 0) {
        console.log('ok')
        dispatch(updateErrorMessage(false))
        dispatch(authThunk())
        return 1
    }
    if (data.resultCode !== 0) {
        console.log('non ok')
        dispatch(updateErrorMessage(true))
        return 0
    }
}

export const logoutThunk = () => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        console.log('ok')
        dispatch(setAuthUserData(null, null, null, false))
    }
    if (data.resultCode !== 0) console.log('non ok')
}

export const updateErrorMessage = (errorMessage) => ({
    type: ERROR_MESSAGE,
    payload: errorMessage,
})