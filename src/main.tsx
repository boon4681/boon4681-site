import React from 'react'
import ReactDOM from 'react-dom'
import './assets/style/index.css'
import './assets/style/index.pcss'
import './assets/style/index.scss'
import './assets/style/tailwind.pcss'
import App from './App'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('main')
)
