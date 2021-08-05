// *Types
import { GET_ALL_USERS, GET_USER_POSTS, LOADING_USERS, ERROR_USERS } from '../../types/usersTypes'

const INITIAL_STATE = {
  users: [],
  userPosts: {},
  loading: false,
  error: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload, loading: false }
    case GET_USER_POSTS:
      return { ...state, userPosts: action.payload, loading: false }
    case LOADING_USERS:
      return { ...state, loading: true }
    case ERROR_USERS:
      return { ...state, loading: false, error: action.payload }
    default:
      // Default case
      return state
  }
}
