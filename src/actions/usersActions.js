import axios from 'axios'
// *Types
import { GET_ALL, LOADING, ERROR } from '../types/usersTypes'

// *The 'dispatch' start the call and talk to the reducer for make the state change
export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  })
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
      type: GET_ALL,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    })
  }
}
