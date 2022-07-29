import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleWare from "redux-thunk"
import {loginReducer} from "./loginReducer";
import {appReducer} from "./appReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    profile: profileReducer,
    messages: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    login: loginReducer,
    app: appReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

export default store;