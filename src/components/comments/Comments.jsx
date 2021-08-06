import React from 'react'
import { connect } from 'react-redux'

// *components
import { Error, Loader } from '../'

const Comments = ({ comments, comment_loading, comment_error }) => {
  return (
    <>
      {comment_loading && <Loader />}
      {comment_error && <Error text={comment_error} />}
      {!comment_error && !comment_error ? (
        <ul>
          {comments?.map((comment) => (
            <li key={comment.id}>
              <a href={`mailto:${comment.email}`} target='_blank' rel='noopener noreferrer'>
                <b>
                  <u>{comment.email}</u>
                </b>
              </a>
              <br />
              {comment.body}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  )
}

const mapStateToProps = ({ postsReducers }) => {
  return { postsReducers }
}

export default connect(mapStateToProps)(Comments)
