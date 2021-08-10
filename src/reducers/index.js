/* Here we create our reducers */

import { combineReducers } from 'redux'
// *List of Reducers
import usersReducers from './users/usersReducers'
import postsReducers from './posts/postsReducers'
import tasksReducers from './tasks/tasksReducers'

export default combineReducers({
  usersReducers,
  postsReducers,
  tasksReducers,
})
