import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
  }, []);
                 
  // map thru posts array and return react component PostDetail
  const postList = posts.map((post) => <PostDetail key={post.id} post={post} />)
  
  // return postList via jsx
  return (
    <div className="App">
      {postList}
    </div>
  );
}

export default App;