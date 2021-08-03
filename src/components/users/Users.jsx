import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Table, Td } from '../../styles/components/Users'
import * as usersActions from '../../actions/usersActions'

const Users = ({ getAll, users }) => {
  useEffect(() => {
    getAll()
  }, [])

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-Mail</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.website}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

// *Here we have the reducers state that Users component is going to use
const mapStateToProps = (reducers) => {
  return reducers.usersReducers
}

export default connect(mapStateToProps, usersActions)(Users)
