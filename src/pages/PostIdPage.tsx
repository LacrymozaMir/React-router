import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IComment, IPost } from '../types/posts';
import { getById, getCommentsByPostId } from '../api/postsApi';
import CommentsItem from '../components/CommentsItem';
import { error } from 'console';

interface RouteParams {
    [key: string]: string;
}


const PostIdPage: React.FC = () => {
    const params = useParams<RouteParams>();
    const [post, setPost] = useState<IPost>();
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
      if(params.id) {
        getPost();
        getComments();
      }
    }, [params.id]);

    const getPost = async () => {
      if (params.id) {
        setPost(await getById(params.id));
      } else console.log();
    }

    const getComments = async () => {
      if (params.id) {
        setComments(await getCommentsByPostId(params.id));
      } else console.log();
    }

    return (
    <div>
      <h1>Страница поста {params.id}</h1>
      <div>{post?.title}</div>
      <div>{post?.body}</div>
      {comments.map(comment => 
        <CommentsItem key={comment.id} comment={comment}/>
      )}
    </div>
  )
}

export default PostIdPage
