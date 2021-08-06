// *Types
import { GET_POSTS_BY_USER, GET_POSTS_BY_ID, LOADING_POSTS, ERROR_POSTS, LOADING_COMMENTS, ERROR_COMMENTS } from '../../types/postsTypes'

const INITIAL_STATE = {
  posts: [],
  postOpen: {},
  loading: false,
  error: '',
  comment_loading: false,
  comment_error: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* Posts */
    case GET_POSTS_BY_USER:
      return { ...state, posts: action.payload, loading: false }
    case LOADING_POSTS:
      return { ...state, loading: true }
    case ERROR_POSTS:
      return { ...state, loading: false, error: action.payload }
    /* Comments */
    case GET_POSTS_BY_ID:
      return { ...state, postOpen: action.payload, comment_loading: false }
    case LOADING_COMMENTS:
      return { ...state, comment_loading: true }
    case ERROR_COMMENTS:
      return { ...state, comment_loading: false, comment_error: action.payload }
    default:
      // Default case
      return state
  }
}
