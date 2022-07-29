import React, {useEffect} from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/loginReducer";

function Header(props) {

    return (
        <header className={styles.header}>
            <img className={styles.pic} src="https://static.mybrandnewlogo.com/images/thumbnail.jpg" alt=""/>

            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <>{props.login}<p className={styles.logOut} onClick={()=>props.logoutThunk()}>logOut</p></>
                    : <NavLink to='/login'>LOGIN</NavLink>
                }

            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {logoutThunk})(Header)