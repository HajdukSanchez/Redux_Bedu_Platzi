// *The 'dispatch' start the call and talk to the reducer for make the state change
export const getAll = () => (dispatch) => {
  dispatch({
    type: 'get_users',
    payload: [1, 2, 3],
  })
}
