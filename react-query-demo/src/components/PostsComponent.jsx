import React from 'react';
import { useQuery } from 'react-query';


const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
 
  const { data, isError, isLoading, refetch } = useQuery('posts', fetchPosts{
  staleTime: 30000,  
  cacheTime: 60000,
  refetchOnWindowFocus: true, 
  keepPreviousData: true,
});

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
      <div>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Fetching...' : 'Refetch Posts'}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
