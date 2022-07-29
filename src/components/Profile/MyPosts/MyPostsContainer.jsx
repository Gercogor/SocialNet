import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator})(MyPosts);

export default MyPostsContainer;