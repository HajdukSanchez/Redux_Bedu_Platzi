import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Margin } from '../styles/pages/App'
import { Menu, Users, PostsList, Tasks, NewTask } from '../components'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Menu />
        <Margin>
          <Route exact path='/' component={Users} />
          <Route exact path='/posts/:id' component={PostsList} />
          <Route exact path='/tasks' component={Tasks} />
          <Route exact path='/tasks/new' component={NewTask} />
          <Route exact path='/tasks/edit/:USER_ID/:TASK_ID' component={NewTask} />
        </Margin>
      </Router>
    </>
  )
}

export default App
