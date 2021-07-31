import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Margin, Table, Td } from '../../styles/components/Users'

const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(data) //* Set the users we get by the API
    })()
  }, [])

  return (
    <Margin>
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
    </Margin>
  )
}

export default Users
