import {profileAPI} from "../components/API/API";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState = {
    posts: [
        {id: 1, text: "asdasdasdada", like: 213,},
        {id: 2, text: "dffdgncvfncf", like: 21,},
    ],
    profile: null,
    status: '',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newState = {...state};
            newState.posts = [...state.posts];
            let newPost = {
                id: 6,
                text: action.text,
                like: 0,
            }
            newState.posts.push(newPost);
            return newState;
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post=>post.id!==action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        text: text,
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId,
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status,
    }
}

export const setUserProfileThunk = (id) => (dispatch) => {
    profileAPI.getProfile(id)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}

export const getStatusThunk = (id) => (dispatch) => {
    profileAPI.getStatus(id)
        .then(data => {
            if (data!=null) {
                dispatch(setUserStatus(data));
            } else {
                data='';
                dispatch(setUserStatus(data));
            }
        })
}
export const updateStatusThunk = (newStatus) => (dispatch) => {
    profileAPI.putStatus(newStatus)
        .then(data => {
            if ( data.resultCode === 0) dispatch(setUserStatus(newStatus))
        });
    setUserStatus(newStatus);
}