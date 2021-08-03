import React from 'react'
import { connect } from 'react-redux'
// *Styles
import { Table, Td } from '../../styles/components/UsersList.js'
import { Title } from '../../styles/GlobalStyles'

const UsersList = ({ users }) => {
  return (
    <>
      <h1>Users List</h1>
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
    </>
  )
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducers
}

export default connect(mapStateToProps)(UsersList)
