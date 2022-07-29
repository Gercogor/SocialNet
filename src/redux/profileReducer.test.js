import {addPostActionCreator, deletePost, profileReducer} from "./profileReducer";

let state = { posts: [
        {id: 1, text: "asdasdasdada", like: 213,},
        {id: 2, text: "dffdgncvfncf", like: 21,},
    ],};

test('Length of posts should be increased', () => {
    let action = addPostActionCreator('new post');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3)
});

test('Length of posts should be decreased', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1)
});