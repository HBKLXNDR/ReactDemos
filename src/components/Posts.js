import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../redux/actions";

const Posts = () => {
    let posts = useSelector(({postsState})=> postsState);
    let dispatch = useDispatch();
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value => {
                loadPosts(value, dispatch)
            });
    },[])

    return (
        <div>
            {posts.map(value => <div key={value.id}>{value.title}</div>)}
        </div>
    );
};

export {Posts};