import axios from 'axios'
// *Types
import { GET_POSTS_BY_USER, LOADING_POSTS, ERROR_POSTS } from '../types/postsTypes'

// *With the getState parameter, redux allow to know the actual state of the store
export const getPostsByUser = (key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING_POSTS,
  })
  const { users } = getState().usersReducers // Users from the reducer
  const { posts } = getState().postsReducers // Posts from the reducer
  const id = users[key].id // Get the user ID

  try {
    const { data } = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const newPosts = [...posts, data] // Latest post and new posts
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
