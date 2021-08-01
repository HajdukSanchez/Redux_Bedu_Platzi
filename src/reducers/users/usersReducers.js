export default (state = {}, action) => {
  switch (action.type) {
    case 'get_users':
      return { ...state, users: action.payload }
    default:
      // Default case
      return state
  }
}
