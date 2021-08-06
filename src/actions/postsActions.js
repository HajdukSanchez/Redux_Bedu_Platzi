import axios from 'axios'
// *Types
import { GET_POSTS_BY_USER, GET_POSTS_BY_ID, LOADING_POSTS, ERROR_POSTS, LOADING_COMMENTS, ERROR_COMMENTS } from '../types/postsTypes'

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

export const getActualPost = (id) => (dispatch, getState) => {
  const { postOpen, posts } = getState().postsReducers
  const post = posts.find((post) => post.id === id)
  const isNewPost = post.id === postOpen.id ? false : true
  // ?If it is a new post open than the actual
  if (isNewPost) {
    dispatch({
      type: GET_POSTS_BY_ID,
      payload: post,
    })
  }
}

export const getCommentsByPost = (id) => async (dispatch, getState) => {
  dispatch({
    type: LOADING_COMMENTS,
  })
  let { postOpen } = getState().postsReducers
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    postOpen = {
      ...postOpen,
      comments: data,
    }
    dispatch({
      type: GET_POSTS_BY_ID,
      payload: postOpen,
    })
  } catch (error) {
    dispatch({
      type: ERROR_COMMENTS,
      payload: error.message,
    })
  }
}
