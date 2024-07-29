import React from 'react'
import { IComment } from '../types/posts'
import styled from 'styled-components';

const Comment = styled.div`
    display: flex;
    padding: 8px;
    margin: 8px;
    flex-direction: column;
`


interface ICommentsItem {
    comment: IComment;
}

const CommentsItem: React.FC<ICommentsItem> = ({ comment}) => {
  return (
    <Comment>
        <h4>{comment.id}. {comment.name}</h4>
        <div>{comment.body}</div>
    </Comment>
  )
}

export default CommentsItem
