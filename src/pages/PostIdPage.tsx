import React, { useEffect, useState } from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import { IComment, IPost } from '../types/posts';
import { getById, getCommentsByPostId } from '../api/postsApi';
import CommentsItem from '../components/CommentsItem';

interface RouteParams {
    id: string;
}


const PostIdPage: React.FC = () => {
    const params = useParams<RouteParams>();
    const [post, setPost] = useState<IPost>();
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getPost();
        getComments();
    }, []);

    const getPost = async () => {
        setPost(await getById(params.id));
    }

    const getComments = async () => {
        setComments(await getCommentsByPostId(params.id));
    }

    return (
    <div>
      <h1>Страница поста {params.id}</h1>
      <div>{post?.title}</div>
      <div>{post?.body}</div>
      {comments.map(comment => 
        <CommentsItem comment={comment}/>
      )}
    </div>
  )
}

export default PostIdPage
