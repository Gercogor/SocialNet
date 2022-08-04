import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, setUserProfileThunk, updateStatusThunk} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";

const ProfileContainer = (props) => {

    let {id} = useParams();

    useEffect(() => {
        props.setUserProfileThunk(id);
        props.getStatusThunk(id);
    }, [id])

    return (
        <Profile {...props} profile={props.profile} updateStatus={props.updateStatusThunk}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
    id: state.auth.id,
})

export default compose(
    connect(mapStateToProps, {setUserProfileThunk, getStatusThunk, updateStatusThunk}),
)(ProfileContainer)