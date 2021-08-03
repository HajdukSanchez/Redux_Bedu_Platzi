import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as usersActions from '../../actions/usersActions'
import * as postsActions from '../../actions/postsActions'

const Posts = ({
  match: {
    params: { key },
  },
  usersReducers: { users }, // If we have multiples reducers, we need to specify the reducer component for data
  getAllUsers,
}) => {
  useEffect(() => {
    if (users.length < 1) getAllUsers() // !If we don't have users, go for them
  }, [])

  return <div>Posts {key}</div>
}

// We send an object with multiples reducers
const mapStateToProps = ({ usersReducers, postsReducers }) => {
  return { usersReducers, postsReducers }
}

// *We combine multiples actions for be call
const mapDispatchToProps = {
  ...usersActions,
  ...postsActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
