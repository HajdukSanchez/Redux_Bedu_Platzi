import React from 'react'
import { connect } from 'react-redux'

const Comments = ({ postsReducers: { comments } }) => {
  return (
    <ul>
      {comments?.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ postsReducers }) => {
  return { postsReducers }
}

export default connect(mapStateToProps)(Comments)
