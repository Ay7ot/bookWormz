import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import './index.css'
import { AppProvider } from './AppContext'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
     <Router>
      <App />
     </Router>
    </AppProvider>
  </React.StrictMode>,
)
