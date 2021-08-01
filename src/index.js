import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import './index.css'
import App from './pages/App'
import reducers from './reducers'

// *Redux store
const store = createStore(
  reducers, // *Reducers
  {}, // *Initial state
  applyMiddleware(reduxThunk) // *Middleware
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
