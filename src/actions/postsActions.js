import axios from 'axios'
// *Types
import { GET_POSTS_BY_USER, LOADING_POSTS, ERROR_POSTS } from '../types/postsTypes'

// *With the getState parameter, redux allow to know the actual state of the store
export const getPostsByUser = (id) => async (dispatch, getState) => {
  dispatch({
    type: LOADING_POSTS,
  })
  /* const { users } = getState().usersReducers // Users from the reducer */
  const { posts } = getState().postsReducers // Posts from the reducer
  const post = posts.find((post, index) => post[index].userId == id)
  try {
    let newPosts = [...posts]
    // !If the post is not already in the store
    if (!post) {
      const { data } = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
      newPosts = [...posts, data]
    }
    // const userToShow = users.find((user) => user.id == id)
    dispatch({
      type: GET_POSTS_BY_USER,
      payload: newPosts,
    })
  } catch (error) {
    dispatch({
      type: ERROR_POSTS,
      payload: error.message,
    })
  }
}
