import React from 'react'
import App from '@/App.jsx'
import ReactDOM from 'react-dom/client'
import './index.css'
import Provider from '@context/Provider.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
