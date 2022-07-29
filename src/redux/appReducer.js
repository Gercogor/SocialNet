import {authThunk} from "./authReducer";

const INITIALIZE_APP = 'INITIALIZE_APP';

const initialState = {
    isInitializing : true,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                isInitializing: false,
            }
        default:
            return state;
    }
}

const initializeSuccess = () => ({
    type: INITIALIZE_APP
})

export const initializeApp = ()=>( dispatch) => {
    let promise = dispatch(authThunk())
    promise.then(()=>{
        dispatch(initializeSuccess())
    })
}