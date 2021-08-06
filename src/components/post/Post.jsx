import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getActualPost, getCommentsByPost } from '../../actions/postsActions'
import { Comments } from '../'
// *Styles
import { PostContainer, Title } from '../../styles/components/Post'

const Post = ({ id, title, body, getActualPost, postsReducers: { postOpen }, getCommentsByPost }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handlePost = async () => {
    if (!postOpen || !isOpen) {
      await getActualPost(id) // Posts clicked
      await getCommentsByPost(id) // Comments for post clicked
    }
    setIsOpen(!isOpen) // *Open or close the panel of comments
  }

  return (
    <PostContainer>
      <Title onClick={() => handlePost()}>{title}</Title>
      <h4>{body}</h4>
      {isOpen && <Comments {...postOpen} />}
    </PostContainer>
  )
}

const mapStateToProps = ({ postsReducers }) => {
  return { postsReducers }
}

const mapDispatchToProps = {
  getActualPost,
  getCommentsByPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
