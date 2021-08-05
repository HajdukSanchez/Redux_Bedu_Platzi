import React from 'react'
// *Styles
import { PostContainer, Title } from '../../styles/components/Post'

const Post = ({ id, title, body }) => {
  const handlePostsComments = (id) => {
    console.log(`Post number ${id}`)
  }

  return (
    <PostContainer onClick={() => handlePostsComments(id)}>
      <Title>{title}</Title>
      <h4>{body}</h4>
    </PostContainer>
  )
}

export default Post
