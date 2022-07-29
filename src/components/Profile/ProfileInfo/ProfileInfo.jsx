import React from 'react';
import styles from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus/ProfileStatus";


function ProfileInfo(props) {

    let canChangeStatus = false;

    if (props.personalId === props.profile.userId) canChangeStatus = true;

    return (
        <>
            <div className={styles.bg}>
                <img className={styles.pic}
                     src="https://i0.wp.com/sreditingzone.com/wp-content/uploads/2018/06/Bike-Background-44-2.jpg?resize=780%2C470&ssl=1"
                     alt=""/>
            </div>
            <div className={styles.descr}>
                <div className={styles.avatar}>
                    <img src={props.profile.photos.small} alt="ava"/>
                </div>
                <div className={styles.aboutUser}>
                    <p className={styles.fullName}>{props.profile.fullName}</p>
                    <p className={styles.fullName}>{props.profile.aboutMe}</p>
                </div>

                <div className={styles.lookingForJob}>
                    <p>Looking for a job:
                        {
                            props.profile.lookingForAJob
                                ?props.profile.lookingForAJobDescription
                                :' NO'
                        }
                    </p>
                    <ProfileStatus canChangeStatus={canChangeStatus} status={props.status} updateStatus={props.updateStatus}/>
                </div>

            </div>
        </>
    )
}

export default ProfileInfo;