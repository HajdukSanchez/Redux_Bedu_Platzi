import React from 'react'
import { connect } from 'react-redux'
// *Styles
import { CommentList, CommentItem } from '../../styles/components/Comments'
// *Components
import { Error, Loader } from '../'

const Comments = ({ comments, postsReducers: { comment_loading, comment_error } }) => {
  return (
    <>
      {comment_loading && <Loader />}
      {comment_error && <Error text={comment_error} />}
      {!comment_error && !comment_error ? (
        <CommentList>
          {comments?.map((comment) => (
            <CommentItem key={comment.id}>
              <a href={`mailto:${comment.email}`} target='_blank' rel='noopener noreferrer' style={{ color: '#253a46' }}>
                <b>
                  <u>{comment.email}</u>
                </b>
              </a>
              <br />
              {comment.body}
            </CommentItem>
          ))}
        </CommentList>
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
