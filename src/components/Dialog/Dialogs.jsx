import React from "react";
import styles from './Dialogs.module.css'
import MessageItem from "./MesasgeItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import {addMessageActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthHoc} from "../hoc/withAuthHoc";
import {compose} from "redux";
import LazyLoadHoc from "../hoc/lazyLoadHoc";


const Dialogs = ({dialogs, messages, sendMessage}) => {

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogs.map(dialog =>
                    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
                )}
            </div>
            <div className={styles.messages}>
                {messages.map(message =>
                    <MessageItem key={message.id} message={message.text}/>
                )}
                <SendMessageForm sendMessage={sendMessage}/>
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

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(addMessageActionCreator(text))
        }
    }
}

// let hocDialog = withAuthHoc(Dialogs)
// export default connect(mapStateToProps, mapDispatchToProps)(hocDialog);

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthHoc)(Dialogs)