import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Margin } from '../styles/pages/App'
import { Menu, Users } from '../components'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Menu />
        <Margin>
          <Route exact path='/' component={Users} />
        </Margin>
      </Router>
    </>
  )
}

export default App
