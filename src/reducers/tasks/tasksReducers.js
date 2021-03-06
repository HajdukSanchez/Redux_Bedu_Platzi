// *Types
import { GET_ALL_TASKS, CHANGE_USER_ID, CHANGE_TASK_TITLE, ADD_NEW_TASK, UPDATE_TASKS, DELETE_TASK, LOADING_TASKS, ERROR_TASKS } from '../../types/tasksTypes'

const INITIAL_STATE = {
  tasks: {},
  loading: false,
  error: '',
  user_id: 0,
  title: '',
  redirect: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return { ...state, tasks: action.payload, loading: false, user_id: 0, title: '', redirect: false }
    case CHANGE_USER_ID:
      return { ...state, user_id: action.payload }
    case CHANGE_TASK_TITLE:
      return { ...state, title: action.payload }
    case UPDATE_TASKS:
      return { ...state, title: action.payload }
    case DELETE_TASK:
      return { ...state, tasks: action.payload, loading: false, user_id: 0, title: '', redirect: false }
    case ADD_NEW_TASK:
      return { ...state, tasks: action.payload, loading: false }
    case LOADING_TASKS:
      return { ...state, loading: true }
    case ERROR_TASKS:
      return { ...state, loading: false, error: action.payload }
    default:
      // Default case
      return state
  }
}
