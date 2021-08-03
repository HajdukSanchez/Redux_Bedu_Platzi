import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as usersActions from '../../actions/usersActions'
// *Components
import { UsersList, Loader, Error } from '../'

const Users = ({ getAllUsers, users, loading, error }) => {
  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div>
      {loading && <Loader />}
      {error && <Error text={error} />}
      {users && <UsersList />}
    </div>
  )
}

// *Here we have the reducers state that Users component is going to use
const mapStateToProps = (reducers) => {
  return reducers.usersReducers
}

export default connect(mapStateToProps, usersActions)(Users)
