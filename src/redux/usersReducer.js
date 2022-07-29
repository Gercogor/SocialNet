import {followAPI, userAPI} from "../components/API/API";

const SHOW_MORE = 'SHOW_MORE';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowing: false,
    isFollowingProgress: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MORE :
            break;
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !action.followed}
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowingProgress: action.isFollowing
                    ? [...state.isFollowingProgress, action.id]
                    : state.isFollowingProgress.filter(id => id !== action.id),
                isFollowing: action.isFollowing
            }
        default:
            return state;
    }
}

export const follow = (userId, followed) => {
    return {
        type: FOLLOW,
        userId,
        followed,
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export const setPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page,
    }
}

export const setTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount,
    }
}

export const toggleIsFetching = (bool) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: bool,
    }
}

export const toggleIsFollowing = (bool, id) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFollowing: bool,
        id,
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {

    dispatch(toggleIsFetching(true));

    userAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    })
}

export const followThunk = (id, followed) => (dispatch) => {
    dispatch(toggleIsFollowing(true, id));
    followed
        ? followAPI.unFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id, followed))
            }
            dispatch(toggleIsFollowing(false, id));
        })
        : followAPI.follow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id, followed))
            }
            dispatch(toggleIsFollowing(false, id));
        });
}




