import axios from 'axios'
// *Types
import { ERROR_POSTS, GET_ALL_POSTS, LOADING_POSTS } from '../types/postsTypes'

export const getAllPosts = () => async (dispatch) => {
  dispatch({
    type: LOADING_POSTS,
  })
  try {
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts')
    dispatch({
      type: GET_ALL_POSTS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ERROR_POSTS,
      payload: error.message,
    })
  }
}
