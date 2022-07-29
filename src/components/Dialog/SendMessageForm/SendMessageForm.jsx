import React from "react";
import {Field, Form} from "react-final-form";
import styles from "./SendMessageForm.module.css";

const SendMessageForm = (props) => {

    let onSubmit = (values) => {
        props.sendMessage(values.message)
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={(props) => (
                <form className={styles.formMessage}
                      onSubmit={(e)=>{
                          props.handleSubmit(e)
                          props.form.reset()
                      }}
                >
                    <Field name="message" >
                        {({input, meta, onChange, value}) => (
                            <textarea
                                id='inputMessage'
                                className={styles.inputMessage}
                                {...input}
                                placeholder="Type message"
                            />
                        )}
                    </Field>
                    {/*<textarea ref={props.newMessage}></textarea>*/}
                    <button
                        className={styles.sendMessage}
                        disabled={props.submitting || props.pristine}
                    >
                        Send
                    </button>
                    {/*<pre>{JSON.stringify(props.values, undefined, 2)}</pre>*/}
                </form>
            )}
        />
    )
}

export default SendMessageForm;