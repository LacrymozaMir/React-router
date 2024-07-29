import React from 'react'
import { IPost } from '../types/posts'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Post = styled.div`
    margin: 8px;
    border: 1px solid green;
    cursor: pointer;
`;

const PostTitle = styled.h3`
    font-size: 20px;
    text-transform: uppercase;
`

interface IPostItem {
    post: IPost;
}

const PostItem: React.FC<IPostItem> = ({post}) => {
    const router = useNavigate();


  return (
    <Post>
      <PostTitle>{post.id}.{post.title}</PostTitle>
      <p>{post.title}</p>
      <button onClick={() => router(`/posts/${post.id}`)}>Open</button>
    </Post>
  )
}

export default PostItem
