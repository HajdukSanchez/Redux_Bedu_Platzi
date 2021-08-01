import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './pages/App'

import reducers from './reducers'

// *Redux store
const store = createStore(
  { reducers }, // *Reducers
  {} // *Initial state
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
