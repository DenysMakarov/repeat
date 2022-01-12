import React from "react";
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";


const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Posts not fond</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((el, index) =>
                <PostItem remove={remove} number={index + 1} post={el} key={el.id}/>)}
        </div>
    )
}

export default PostList;
