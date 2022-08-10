import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../../redux/loginReducer";

function Header() {

    const dispatch = useDispatch()
    const isAuth = useSelector(state=>state.auth.isAuth)
    const login = useSelector(state=>state.auth.login)

    const logOut = () => {
        dispatch(logoutThunk());
    }

    return (
        <header className={styles.header}>
            <img className={styles.pic} src="https://static.mybrandnewlogo.com/images/thumbnail.jpg" alt=""/>
            <div className={styles.loginBlock}>
                {isAuth
                    ? <>{login}<p className={styles.logOut} onClick={logOut}>logOut</p></>
                    : <NavLink to='/login'>LOGIN</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;