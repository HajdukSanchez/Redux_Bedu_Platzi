import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Td } from '../../styles/components/Users'
import { connect } from 'react-redux'

const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(data) //* Set the users we get by the API
    })()
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

export default connect(mapStateToProps, {
  /* actions */
})(Users)
