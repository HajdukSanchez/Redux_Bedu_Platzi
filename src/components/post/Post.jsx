import React from 'react'
// *Styles
import { PostContainer, Title } from '../../styles/components/Post'

const Post = ({ title, body }) => {
  return (
    <PostContainer>
      <Title>{title}</Title>
      <h4>{body}</h4>
    </PostContainer>
  )
}

export default Post
