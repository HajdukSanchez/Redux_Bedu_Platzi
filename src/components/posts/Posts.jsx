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
  getPostsByUser,
}) => {
  useEffect(() => {
    const getData = async () => {
      if (users.length < 1) await getAllUsers() // !If we don't have users, go for them
      getPostsByUser(key)
    }
    getData()
  }, [])

  return <div>Posts {key}</div>
}

// *We map only what we need
const { getAllUsers } = usersActions
const { getPostsByUser } = postsActions

// We send an object with multiples reducers
const mapStateToProps = ({ usersReducers, postsReducers }) => {
  return { usersReducers, postsReducers }
}

// *We combine multiples actions for be call
const mapDispatchToProps = {
  getAllUsers,
  getPostsByUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
