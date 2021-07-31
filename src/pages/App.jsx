import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/pages/App.css'

const App = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(data) //* Set the users we get by the API
    })()
  }, [])

  return (
    <div className='margin'>
      <table className='table'>
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
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
