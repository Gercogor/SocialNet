import {authAPI, securityAPI} from "../components/API/API";
import {authThunk, setAuthUserData} from "./authReducer";

const ERROR_MESSAGE = "ERROR_MESSAGE";
const SET_CAPTCHA = "SET_CAPTCHA";

const initialState = {
    email: null,
    password: null,
    remember: false,
    errorText: false,
    captchaUrl: null,
}
//https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg
export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case ERROR_MESSAGE:
            return {
                ...state,
                errorText: action.payload,
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captchaUrl: action.payload,
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
    if (data.resultCode === 10) {
        dispatch(getCaptchaThunk());
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

export const getCaptchaThunk = () => async dispatch => {
    let response = await securityAPI.captcha();
    const captchaUrl = response.url;
    dispatch(setCaptcha(captchaUrl));
}

const setCaptcha = (captchaUrl) => ({
    type: SET_CAPTCHA,
    payload: captchaUrl,
})

export const updateErrorMessage = (errorMessage) => ({
    type: ERROR_MESSAGE,
    payload: errorMessage,
})

