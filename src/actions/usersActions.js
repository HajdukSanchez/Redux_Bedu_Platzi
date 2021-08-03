import axios from 'axios'
// *Types
import { GET_ALL_USERS, LOADING_USERS, ERROR_USERS } from '../types/usersTypes'

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
