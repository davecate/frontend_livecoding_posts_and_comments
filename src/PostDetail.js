// import react with hooks
import React, { useEffect, useState } from "react"

// begin PostDetail component
const PostDetail = ( { post } ) => {
  // state variables for comments
  const [comments, setComments] = useState([])
  const [commentDisplay, setCommentDisplay] = useState(false)
  
  // get post id
  const postId = post.id
  
  // effect hook to fetch comments
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then(setComments)
      .catch((error) => {
        console.log(error)
      });
  }, [])
  
  // click handler to show/hide comments
  const clickHandler = () => setCommentDisplay(!commentDisplay)
  
  // map thru comments array and return comment body via jsx
  const commentList = comments.map((comment) => <div><p>{comment.body}</p></div>)
         
  // return post title, body, and comments via jsx
  return   <div>
             <h1>{post.title}</h1>
             <p onClick={clickHandler}>{post.body}</p>
             {/* conditional render: 
             && operator checks truth of left side (boolean only), 
             then truth of right side (any value). 
             if both are truthy, returns value of right side only */}
             {commentDisplay && commentList}
           </div>
}

// export
export default PostDetail