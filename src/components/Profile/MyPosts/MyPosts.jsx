import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";

function MyPosts({posts, addPostActionCreator}) {
    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <AddNewPostForm addPost={addPostActionCreator}/>
            <div className='all-posts'>
                {posts.map(post=>
                    <Post key={post.id} message={post.text} likescount={post.like} />
                )}
            </div>
        </div>
    )
}

export default MyPosts;