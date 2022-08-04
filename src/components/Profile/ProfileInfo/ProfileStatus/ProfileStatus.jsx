import React, {useState} from 'react';
import styles from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [newStatus, setNewStatus] = useState(props.status)

    const handleChange = () => {
        if (props.canChangeStatus===true) setEditMode(true)
    }

    const changeStatus = (newStatus) => {
        if (newStatus===props.status) return setEditMode(false)
        props.updateStatus(newStatus)
        setEditMode(false)
    }

    return (
        <div className={styles.status}>

            {
                editMode
                // true
                ?<input
                        autoFocus={true}
                        onBlur={(e)=>{
                            changeStatus(e.target.value)
                        }}
                        type="text"
                        onChange={(e)=>setNewStatus(e.target.value)}
                        value={newStatus}
                />
                :<span
                        onDoubleClick={handleChange}
                >
                        { props.status
                          ? props.status
                          : "no status"
                        }
                </span>
            }

        </div>
    );
};

export default ProfileStatus;