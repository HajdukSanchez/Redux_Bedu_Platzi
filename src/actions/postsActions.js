import axios from 'axios'
// *Types
import { GET_POSTS_BY_USER, GET_POSTS_BY_ID, GET_COMMENTS_BY_POST, LOADING_POSTS, ERROR_POSTS } from '../types/postsTypes'

// *With the getState parameter, redux allow to know the actual state of the store
export const getPostsByUser = (id) => async (dispatch) => {
  dispatch({
    type: LOADING_POSTS,
  })
  try {
    const { data } = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
    dispatch({
      type: GET_POSTS_BY_USER,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ERROR_POSTS,
      payload: error.message,
    })
  }
}

export const getPostById = (post) => (dispatch, getState) => {
  const { postOpen } = getState().postsReducers
  const isNewPost = post.id === postOpen.id ? false : true
  // ?If it is a new post for open than the actual
  if (isNewPost) {
    dispatch({
      type: GET_POSTS_BY_ID,
      payload: post,
    })
  }
}

export const getCommentsByPostId = (postId) => async (dispatch) => {
  dispatch({
    type: LOADING_POSTS,
  })
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    dispatch({
      type: GET_COMMENTS_BY_POST,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ERROR_POSTS,
      payload: error.message,
    })
  }
}
