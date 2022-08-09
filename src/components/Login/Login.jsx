import React from 'react';
import styles from './Login.module.css';
import {Form, Field} from 'react-final-form';
import {loginThunk} from "../../redux/loginReducer";
import {connect} from "react-redux";

const Login = (props) => {

    let onSubmit = values => {
        props.loginThunk(values);
    }

    const required = value => (value ? undefined : 'Required');
    const captcha = props.captcha;

    return (
        <div className={styles.loginPage}>
            <Form
                onSubmit={onSubmit}
                initialValues={{
                    remember: false,
                    email: `repcat1@mail.ru`,
                    password: '123456'
                }}
                render={(props) => (
                    <form className={styles.loginForm} action="" onSubmit={props.handleSubmit}>
                        <div className={styles.inputBlock}>
                            <label className={styles.inputName}>Email</label>
                            <Field
                                name="email"
                                placeholder="Email"
                                validate={required}
                            >
                                {({input, meta, placeholder}) => (
                                    <>
                                        <input {...input} placeholder={placeholder} type="email"/>
                                        {meta.error && meta.touched &&
                                            <span className={styles.required}>{meta.error}</span>}
                                    </>
                                )}
                            </Field>
                        </div>
                        <div className={styles.inputBlock}>
                            <label className={styles.inputName}>Password</label>
                            <Field
                                name="password"
                                component="input"
                                placeholder="Password"
                                validate={required}
                            >
                                {({input, meta, placeholder}) => (
                                    <>
                                        <input {...input} placeholder={placeholder} type="password"/>
                                        {meta.error && meta.touched &&
                                            <span className={styles.required}>{meta.error}</span>}
                                    </>
                                )}
                            </Field>
                        </div>
                        <div className={styles.inputBlock}>
                            <label>Remember</label>
                            <Field name="remember" component="input" type="checkbox"/>
                        </div>
                        {console.log(captcha)}
                        {
                            captcha
                                ? <div>
                                    <label>Insert the Captcha</label>
                                    <img src={captcha} alt=""/>
                                    <Field name="captcha" component="input" type="text"/>
                                </div>
                                : undefined
                        }
                        <button
                            className={styles.btnSubmit}
                            type='submit'
                            // disabled={props.submitting || props.pristine}
                        >
                            LogIn
                        </button>
                        <pre>{JSON.stringify(props.values, undefined, 2)}</pre>
                    </form>

                )
                }
            />
            {
                props.errorText
                    ? <p>Incorrect email/password</p>
                    : undefined
            }
        </div>
    );
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorText: state.login.errorText,
    captcha: state.login.captchaUrl,
})
export default connect(mapStateToProps, {loginThunk})(Login);