import React from 'react';
import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";

let activeStyle = {
    color: "yellow",
    border: "1px solid brown",
    backgroundColor: "black",
};

const Nav = () => {

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}><NavLink to={`/profile/`} style={({isActive}) => isActive ? activeStyle : undefined}>Profile</NavLink></li>
                <li className={styles.item}><NavLink to={'/dialogs'} style={({isActive}) => isActive ? activeStyle : undefined}>Dialogs</NavLink></li>
                <li className={styles.item}><NavLink to={'/users'} style={({isActive}) => isActive ? activeStyle : undefined}>Users</NavLink></li>
                <li className={styles.item}><NavLink to={'/123'} style={({isActive}) => isActive ? activeStyle : undefined}>Music</NavLink></li>
                <li className={styles.item}><NavLink to={'/345'} style={({isActive}) => isActive ? activeStyle : undefined}>Photos</NavLink></li>
            </ul>
        </nav>
    )
};

export default Nav;