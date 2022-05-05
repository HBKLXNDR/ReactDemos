import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../redux/actions.creators";

const Posts = () => {
    let posts = useSelector(({postsState})=> postsState);
    let dispatch = useDispatch();

    useEffect(()=> {
        dispatch(loadPosts())
    },[])

    return (
        <div>
            {posts.map(value => <div key={value.id}>{value.title}</div>)}
        </div>
    );
};

export {Posts};