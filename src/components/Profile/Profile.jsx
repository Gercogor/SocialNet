import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../Loader/Loader";

function Profile(props) {

    if(!props.profile) {
        return <Loader/>
    }

    return (
        <div className={styles.profile}>
            <ProfileInfo personalId={props.id} status={props.status} profile={props.profile} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;