import UsersAPI from "./UsersAPI";
import {connect} from "react-redux";
import {
    setUsers,
    setPage,
    setTotalCount,
    getUsersThunkCreator,
    followThunk,
    setPageSize,
} from "../../redux/usersReducer";

import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../utils/userSelectors";

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state),
    }
}

let mapDispatchToProps =
    {
        setUsers,
        setPage,
        setPageSize,
        setTotalCount,
        getUsersThunkCreator,
        followThunk,
    }

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);