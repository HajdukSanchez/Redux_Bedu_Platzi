import axios from 'axios'
// *Types
import { GET_ALL_POSTS, GET_POSTS_BY_USER, LOADING_POSTS, ERROR_POSTS } from '../types/postsTypes'

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

// *With the getState parameter, redux allow us to know  the actual state of the store
export const getPostsByUser = (key) => async (dispatch, getState) => {
  /* dispatch({
    type: LOADING_POSTS,
  }) */
  const { users } = getState().usersReducers // Users from the reducer
  const id = users[key].id // We get the users ID
  const { data } = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
  console.log(data)
  /* try {
    dispatch({
      type: GET_POSTS_BY_USER,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ERROR_POSTS,
      payload: error.message,
    })
  } */
}
