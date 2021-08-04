// *Types
import { GET_POSTS_BY_USER, LOADING_POSTS, ERROR_POSTS } from '../../types/postsTypes'

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS_BY_USER:
      return { ...state, posts: action.payload, loading: false }
    case LOADING_POSTS:
      return { ...state, loading: true }
    case ERROR_POSTS:
      return { ...state, loading: false, error: action.payload }
    default:
      // Default case
      return state
  }
}
