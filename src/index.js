import React from 'react'
import ReactDOM from 'react-dom/client'

import { NavProvider } from './context/navigation'

import App from './App'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <NavProvider>
    <App />
  </NavProvider>,
)
