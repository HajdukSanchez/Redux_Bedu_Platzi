import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

// *Redux store
const store = createStore(
  {}, // *Reducers
  {} // *Initial state
)

ReactDOM.render(<App />, document.getElementById('root'))
