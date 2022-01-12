import React, { useState} from 'react';
import MyButton from "../button/MyButton";
import MyInp from "../input/MyInp";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInp
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
            />
            <MyInp
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
            />

            <MyButton type="submit" onClick={addNewPost}>Create Post</MyButton>
        </form>
    );
};

export default PostForm;