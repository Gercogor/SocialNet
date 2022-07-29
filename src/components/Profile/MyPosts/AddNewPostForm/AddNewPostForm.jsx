import React from 'react';
import {Field, Form} from "react-final-form";
import styles from './AddNewPostForm.module.css'

const AddNewPostForm = (props) => {

    let onSubmit = (values) => {
        props.addPost(values.post)
    }

    return (
        <Form
            onSubmit={onSubmit}
            validate={values=>{
                const errors = {}
                if (values.post?.length > 30) {
                    errors.post = 'Too much symbols'
                }
                return errors
            }}
            render={(props) => (
                <form className={styles.formPost}
                      onSubmit={(e)=>{
                          props.handleSubmit(e)
                          props.form.reset()
                      }}
                >
                    <Field
                        name="post"
                        maxlength="140"
                    >
                        {({input, meta}) => (
                            <>
                                <textarea
                                    id='inputPost'
                                    maxLength="31"
                                    className={`${styles.inputPost} ${meta.error?styles.error:undefined}`}
                                    {...input}
                                    placeholder="What are your thinking? Type here"
                                />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </>
                        )}
                    </Field>
                    <button
                        className={styles.sendPost}
                        disabled={props.submitting || props.pristine}
                    >
                        Publish
                    </button>
                    {/*<pre>{JSON.stringify(props.values, undefined, 2)}</pre>*/}
                </form>
            )}
        />

    );
};

export default AddNewPostForm;