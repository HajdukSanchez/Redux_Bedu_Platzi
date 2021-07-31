import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Menu, Users } from '../components'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Menu />
        <Route exact path='/' component={Users} />
      </Router>
    </>
  )
}

export default App
