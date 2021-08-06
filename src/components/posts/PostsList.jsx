import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllUsers, getUserByPosts } from '../../actions/usersActions'
import { getPostsByUser } from '../../actions/postsActions'
import { Loader, Error, Post } from '../'
import { useState } from 'react'

const Posts = ({
  match: {
    params: { id },
  },
  usersReducers: { users, userPosts, loading: userLoading, error: userError }, // ?If we have multiples reducers, we need to specify the reducer component for data
  postsReducers: { posts, loading: postLoading, error: postError },
  getAllUsers,
  getPostsByUser,
  getUserByPosts,
}) => {
  const [isInfoReady, setIsInfoReady] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (users.length < 1) await getAllUsers()
      await getUserByPosts(id) // !If no user, go for them
      await getPostsByUser(id) // !If no posts, go for them
      const isReady = !userLoading && !postLoading && !userError && !postError ? true : false // !If everything is ready
      setIsInfoReady(isReady)
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
      {isInfoReady && posts.map((post) => <Post key={post.id} {...post} userId={userPosts.id} />)}
    </div>
  )
}

/* // *We map only what we need
const { getAllUsers, getUserByPosts } = usersActions
const { getPostsByUser, openClose } = postsActions */

// *We send an object with multiples reducers
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
