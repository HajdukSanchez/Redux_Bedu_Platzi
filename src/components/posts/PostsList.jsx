import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as usersActions from '../../actions/usersActions'
import * as postsActions from '../../actions/postsActions'
import { Loader, Error, Post } from '../'

const Posts = ({
  match: {
    params: { id },
  },
  usersReducers: { users, userPosts, loading: userLoading, error: userError }, // If we have multiples reducers, we need to specify the reducer component for data
  postsReducers: { posts, loading: postLoading, error: postError },
  getAllUsers,
  getPostsByUser,
  getUserByPosts,
}) => {
  useEffect(() => {
    ;(async () => {
      if (users.length < 1) await getAllUsers()
      getUserByPosts(id) // !If no user, go for them
      if (posts.length < 1) getPostsByUser(id) // !If no posts, go for them
    })()
  }, [])

  return (
    <div>
      {(userLoading || postLoading) && <Loader />}
      {userError && <Error text={userError} />}
      {postError && <Error text={postError} />}
      <h1 style={{ marginBottom: '40px' }}>
        Posts by <i>{userPosts?.name}</i>
      </h1>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

// *We map only what we need
const { getAllUsers, getUserByPosts } = usersActions
const { getPostsByUser } = postsActions

// We send an object with multiples reducers
const mapStateToProps = ({ usersReducers, postsReducers }) => {
  return { usersReducers, postsReducers }
}

// *We combine multiples actions for be call
const mapDispatchToProps = {
  getAllUsers,
  getUserByPosts,
  getPostsByUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
