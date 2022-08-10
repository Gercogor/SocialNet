import React from 'react';
import styles from './Post.module.css'

const Post = ({message, likesCount, userName}) => {
    return (
        <div className={styles.post}>
            <div className={styles.postBar}>
                <div className={styles.avatarPicWrapper}>
                    <img className={styles.avatarPic}
                         src="https://www.meme-arsenal.com/memes/8ab5fe07681cd172915e9472a0a8443d.jpg" alt=""/>
                </div>
                <div className={styles.mainBlock}>
                    <p>{userName ? userName : "userName"}</p>
                    <p>{message}</p>
                </div>
            </div>

            <div className={styles.statusBar}>
                <span className={styles.likesPicWrapper}>
                    <img className={styles.likesPic} src="https://ikonki.svgpng.ru/wp-content/uploads/2020/04/like.svg"
                         alt=""/>
                </span>
                <span>{likesCount}</span>
            </div>
        </div>
    )
}

export default Post;