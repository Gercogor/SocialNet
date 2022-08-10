import React from "react";
import styles from './Dialogs.module.css'
import MessageItem from "./MesasgeItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import {addMessageActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthHoc} from "../hoc/withAuthHoc";
import {compose} from "redux";

const Dialogs = ({dialogs, messages, addMessageActionCreator}) => {

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogs.map(dialog =>
                    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
                )}
            </div>
            <div className={styles.messages}>
                {messages.map((message,index) =>
                    <MessageItem key={index} message={message.text}/>
                )}
                <SendMessageForm sendMessage={addMessageActionCreator}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.messages.dialogs,
        messages: state.messages.messages,
    }
}

export default compose(connect(mapStateToProps, {addMessageActionCreator}), withAuthHoc)(Dialogs)