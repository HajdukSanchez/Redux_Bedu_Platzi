import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getPostById } from '../../actions/postsActions'
import { Comments } from '../'
// *Styles
import { PostContainer, Title } from '../../styles/components/Post'

const Post = ({ userId, id, title, body, getPostById, postOpen }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [actualPost, setActualPost] = useState({ userId, id, title, body })

  const handlePost = () => {
    if (isOpen) getPostById(actualPost)
    setIsOpen(!isOpen) // *Open or close the panel of comments
  }

  return (
    <PostContainer onClick={() => handlePost()}>
      <Title>{title}</Title>
      <h4>{body}</h4>
      {isOpen && <Comments {...postOpen} />}
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
