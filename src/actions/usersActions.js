import axios from 'axios'
// *Types
import { GET_ALL_USERS, GET_USER_POSTS, LOADING_USERS, ERROR_USERS } from '../types/usersTypes'

// *The 'dispatch' start the call and talk to the reducer for make the state change
export const getAllUsers = () => async (dispatch) => {
  dispatch({
    type: LOADING_USERS,
  })
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
      type: GET_ALL_USERS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ERROR_USERS,
      payload: error.message,
    })
  }
}

export const getUserByPosts = (id) => (dispatch, getState) => {
  const { users, userPosts } = getState().usersReducers // Users from the reducer
  dispatch({
    type: LOADING_USERS,
  })
  try {
    const user = !userPosts ? userPosts : users.find((user) => user.id === parseInt(id))
    // To store the user
    dispatch({
      type: GET_USER_POSTS,
      payload: user,
    })
  } catch (error) {
    dispatch({
      type: ERROR_USERS,
      payload: error.message,
    })
  }
}
