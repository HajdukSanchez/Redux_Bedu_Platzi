import axios from 'axios'
// *Types
import { GET_POSTS_BY_USER, LOADING_POSTS, ERROR_POSTS } from '../types/postsTypes'

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
