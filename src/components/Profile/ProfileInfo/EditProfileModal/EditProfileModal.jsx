import React from 'react';
import styles from './EditProfileModal.module.css'
import {Field, Form} from "react-final-form";
import {useDispatch, useSelector} from "react-redux";
import {editUserPhotoThunk, editUserProfileThunk} from "../../../../redux/profileReducer";

function EditProfileModal({modal, setModal}) {
    const dispatch = useDispatch()
    let profile = useSelector((state) => state.profile.profile);

    const required = value => (value ? undefined : <div style={{color: 'red',}}>Required</div>);

    let onSubmit = (values) => {
        dispatch(editUserProfileThunk(values));
        setModal(false);
    }

    let setNewPhoto = (e) => {
        e.preventDefault();
        let file = document.querySelector('#avatar').files[0]
        dispatch(editUserPhotoThunk(file, profile.userId))
        setModal(false);
    }

    let initialValue = {
        ...profile
    }

    let changeStatus;

    return (
        <div className={`${styles.modalWrapper} ${modal ? styles.active : undefined}`} onClick={() => setModal(false)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <p className={styles.header}>Edit profile</p>
                <Form
                    onSubmit={onSubmit}
                    initialValues={initialValue}
                    render={(props) => (
                        <form className={styles.formEditProfile}
                              onSubmit={(e) => {
                                  props.handleSubmit(e)
                              }}
                        >
                            {changeStatus = Object.values(props.modified)}
                            {/*<div className={styles.labelBlock}>*/}
                            {/*    <label>Account ID: </label>*/}
                            {/*    <label>*/}
                            {/*        <Field*/}
                            {/*            name="userId"*/}
                            {/*            component="input"*/}
                            {/*            type="text"*/}
                            {/*        />*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            <div className={styles.labelBlock}>
                                <label>Full name: </label>
                                <label>
                                    <Field
                                        name="fullName"
                                        component="input"
                                        type="text"
                                        validate={required}
                                    >
                                        {({ input, meta }) => (
                                            <div>
                                                <input {...input} type="text" placeholder="Full Name" />
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </label>
                            </div>
                            <div className={styles.labelBlock}>
                                <label>About me: </label>
                                <label>
                                    <Field
                                        name="aboutMe"
                                        component="input"
                                        type="text"
                                        validate={required}
                                    >
                                        {({ input, meta }) => (
                                            <div>
                                                <input {...input} type="text" placeholder="About" />
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </label>
                            </div>
                            <div className={styles.labelBlock}>
                                <label>Search work? </label>
                                <label>
                                    <Field
                                        name="lookingForAJob"
                                        component="input"
                                        type="checkbox"
                                    />
                                </label>
                            </div>
                            <div className={styles.labelBlock}>
                                <label>Search work? What? </label>
                                <label>
                                    <Field
                                        name="lookingForAJobDescription"
                                        component="input"
                                        type="text"
                                        validate={required}
                                    >
                                        {({ input, meta }) => (
                                            <div>
                                                <input {...input} type="text" placeholder="Jod description" />
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </label>
                            </div>
                            <div className={styles.labelBlock}>
                                <label>Contacts: </label>
                                <label>
                                    <div className={styles.labelBlock}>
                                        <label>GitHub </label>
                                        <label>
                                            <Field
                                                name="contacts.github"
                                                component="input"
                                                type="text"
                                            />
                                        </label>
                                    </div>
                                    <div className={styles.labelBlock}>
                                        <label>VK </label>
                                        <label>
                                            <Field
                                                name="contacts.vk"
                                                component="input"
                                                type="text"
                                            />
                                        </label>
                                    </div>
                                    <div className={styles.labelBlock}>
                                        <label>Website </label>
                                        <label>
                                            <Field
                                                name="contacts.website"
                                                component="input"
                                                type="text"
                                            />
                                        </label>
                                    </div>
                                    <div className={styles.labelBlock}>
                                        <label>YouTube </label>
                                        <label>
                                            <Field
                                                name="contacts.youtube"
                                                component="input"
                                                type="text"
                                            />
                                        </label>
                                    </div>
                                    <div className={styles.labelBlock}>
                                        <label>Main Link </label>
                                        <label>
                                            <Field
                                                name="contacts.mainLink"
                                                component="input"
                                                type="text"
                                            />
                                        </label>
                                    </div>
                                </label>
                            </div>
                            <button
                                disabled={!changeStatus.includes(true)}
                            >
                                Send
                            </button>

                            {/*<pre>{JSON.stringify(props.values, undefined, 2)}</pre>*/}

                        </form>
                    )}
                />
                <div style={{margin:"10px 0"}}></div>
                <form onSubmit={setNewPhoto}>
                    <label htmlFor="avatar">Set new photo:</label>
                    <input id="avatar" name="avatar" type={'file'} accept="image/png, image/jpeg"/>
                    <button>Set</button>
                </form>
            </div>
        </div>
    );
}

export default EditProfileModal;
