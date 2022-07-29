import styles from "../Dialogs.module.css";
import React from "react";

const MessageItem = ({message, id}) => {
    return(
        <div className={styles.message}>
            {message}
        </div>
    )
}

export default MessageItem;