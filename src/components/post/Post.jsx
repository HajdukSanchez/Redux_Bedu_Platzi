import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getPostById } from '../../actions/postsActions'
// *Styles
import { PostContainer, Title } from '../../styles/components/Post'

const Post = ({ userId, id, title, body, getPostById, postOpen }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [actualPost, setActualPost] = useState({ userId, id, title, body })

  return (
    <PostContainer onClick={() => getPostById(actualPost)}>
      <Title>{title}</Title>
      <h4>{body}</h4>
    </PostContainer>
  )
}

const mapStateToProps = ({ postReducers }) => {
  return { postReducers }
}

const mapDispatchToProps = {
  getPostById,
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
