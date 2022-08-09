import React, {useState} from 'react';
import styles from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import EditProfileModal from "./EditProfileModal/EditProfileModal";


function ProfileInfo(props) {

    let canChangeProfile = false;
    let anySocial = false;

    const [modal, setModal] = useState(false)

    if (props.personalId === props.profile.userId) {
        canChangeProfile = true;
    }

    return (
        <>
            <div className={styles.bg}>
                <img className={styles.pic}
                     src="https://i0.wp.com/sreditingzone.com/wp-content/uploads/2018/06/Bike-Background-44-2.jpg?resize=780%2C470&ssl=1"
                     alt=""/>
            </div>
            <div className={styles.descr}>
                <div className={styles.avatar}>
                    {
                        props.profile.photos.large
                            ? <img src={props.profile.photos.large} alt="ava"/>
                            : <img src='https://www.norbel.ru/assets/images/no_ava.png' alt="noAva"/>
                    }
                    {
                        canChangeProfile
                            ? <button onClick={() => setModal(true)}>Edit profile</button>
                            : undefined
                    }
                </div>
                <div className={styles.aboutUser}>
                    <p className={styles.fullName}>{props.profile.fullName}</p>
                    {
                        props.profile.aboutMe
                            ? <p className={styles.fullName}>{props.profile.aboutMe}</p>
                            : undefined
                    }
                    <ProfileStatus canChangeStatus={canChangeProfile} status={props.status}
                                   updateStatus={props.updateStatus}/>
                </div>
                <div className={styles.socialNet}>
                    <p>My social net:</p>
                    {
                        Object.keys(props.profile.contacts).map((name) => {
                            if (props.profile.contacts[name]) {
                                anySocial = true;
                                return <p key={name} className={styles.netLink}><a
                                    href={props.profile.contacts[name]}>{name}</a></p>
                            }
                        })
                    }
                    {
                        anySocial ? undefined : <p className={styles.netLink}>No Social Net</p>
                    }
                </div>
            </div>
            <div className={styles.lookingForJob}>
                <p>Looking for a job:
                    {
                        props.profile.lookingForAJob
                            ? ' ' + props.profile.lookingForAJobDescription
                            : ' NO'
                    }
                </p>
            </div>
            {
                canChangeProfile
                    ? <EditProfileModal modal={modal} setModal={setModal}/>
                    : undefined
            }
        </>
    )
}

export default ProfileInfo;