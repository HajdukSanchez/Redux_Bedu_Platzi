import axios from 'axios'
// *Types
import { GET_ALL_TASKS, LOADING_TASKS, ERROR_TASKS } from '../types/tasksTypes'

export const getAllTasks = () => async (dispatch) => {
  dispatch({
    type: LOADING_TASKS,
  })
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    dispatch({
      type: GET_ALL_TASKS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ERROR_TASKS,
      payload: error.message,
    })
  }
}

/* export const getUserByPosts = (id) => (dispatch, getState) => {
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
 */
