import React from 'react'
import '../styles/pages/App.css'

const App = () => {
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
          <tr>
            <td>Jozek Hajduk</td>
            <td>jozekhs@gmail.com</td>
            <td>hajduk-sanchez.com</td>
          </tr>
          <tr>
            <td>Platzi</td>
            <td>platzi@platzi.com</td>
            <td>Platzi.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
