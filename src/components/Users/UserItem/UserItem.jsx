import React from "react";
import './UserItem.css'
import {NavLink} from "react-router-dom";

const UserItem = ({user, id, isFollowingProgress, followThunk}) => {

    return (
        <div className='user'>
            <div className='user__left'>
                <div className='user__left-avatar'>
                    <NavLink to={'/profile/' + id}>
                        <img
                            src={user.photos.small != null ? user.photos.small : 'https://www.norbel.ru/assets/images/no_ava.png'}
                            alt="avatar"/>
                    </NavLink>
                </div>
                <button
                    disabled={isFollowingProgress.some(id=>id===user.id)}
                    className='follow-btn'
                    onClick={() => {
                        followThunk(user.id, user.followed);
                    }}
                >
                    {user.followed ? "UnFollow" : "Follow"}
                </button>
            </div>
            <div className='user__right'>
                <div className='user__right-left'>
                    <p className='user__right-name'>{user.name}</p>
                    <p className='user__right-status'>{user.status}</p>
                </div>
                <div className='user__right-right'>
                    <p className='user__right-city'>{user.location?.city ? user.location?.city :"City not selected"}</p>
                    <p className='user__right-country'>{user.location?.country ? user.location?.country :"Country not selected"}</p>
                </div>
            </div>

        </div>
    )
}

export default UserItem;