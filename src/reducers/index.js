/* Here we create our reducers */

import { combineReducers } from 'redux'
// *List of Reducers
import usersReducers from './users/usersReducers'

export default combineReducers({
  usersReducers,
})
