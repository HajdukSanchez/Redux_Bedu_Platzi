import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as usersActions from '../../actions/usersActions'
// *Components
import { UsersList, Loader, Error } from '../'

const Users = ({ getAllUsers, users, loading, error }) => {
  useEffect(() => {
    if (users.length < 1) getAllUsers() // !If no users
  }, [])

  return (
    <div>
      {loading && <Loader />}
      {error && <Error text={error} />}
      {users && <UsersList />}
    </div>
  )
}

const { getAllUsers } = usersActions

// *Here we have the reducers state that Users component is going to use
const mapStateToProps = (reducers) => {
  return reducers.usersReducers
}

const mapDispatchToProps = {
  getAllUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
