import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService"; // вытягиваем параметры

const PostIdPage = () => {
    const param = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(param.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async () =>  {
        const response = await PostService.getCommentId(param.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(param.id)
        fetchComments(param.id)
    }, [])

    return (
        <div>
            <h1>On Post {param.id}</h1>
            {isLoading
                ? <p>Loading...</p>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {isComLoading
            ? <h1>Loading...</h1>
                : <div>
                    {comments.map(com =>
                        <div key={com.id} style={{marginTop: 15}}>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;