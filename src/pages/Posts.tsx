import React, { useEffect, useState } from 'react'
import { IPost } from '../types/posts';
import { fetchPosts } from '../api/postsApi';
import PostsList from '../components/PostsList';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);


  
  useEffect(() => {
    getPosts();

  }, []);

  const getPosts = async () => {
    setPosts(await fetchPosts());
  }
  
  
  return (
    <div>
        <PostsList posts={posts}/>
    </div>
  )
}

export default Posts