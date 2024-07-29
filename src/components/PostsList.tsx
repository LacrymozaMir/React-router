import React from 'react'
import { IPost } from '../types/posts'
import PostItem from './PostItem';

interface IPostsList {
    posts: IPost[];
}

const PostsList: React.FC<IPostsList> = ({posts}) => {

  return (
    <div>
        {posts.map(post => 
            <PostItem key={post.id} post={post}/>
        )}        
    </div>
  )
}

export default PostsList
