import axios from 'axios'

// *The 'dispatch' start the call and talk to the reducer for make the state change
export const getAll = () => async (dispatch) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  dispatch({
    type: 'get_users',
    payload: data,
  })
}
