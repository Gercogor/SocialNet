import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";

const MyPosts = ({posts, addPostActionCreator}) => {
    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <AddNewPostForm addPost={addPostActionCreator}/>
            <div className='all-posts'>
                {posts.map((post, index) =>
                    <Post key={index} message={post.text} likesCount={post.like}/>
                )}
            </div>
        </div>
    )
}

export default MyPosts;