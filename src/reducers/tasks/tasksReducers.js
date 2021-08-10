// *Types
import { GET_ALL_TASKS, LOADING_TASKS, ERROR_TASKS } from '../../types/tasksTypes'

const INITIAL_STATE = {
  tasks: {},
  loading: false,
  error: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
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
