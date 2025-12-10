import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import ClassApp from './ClassApp.jsx'
import FunctionApp from './App1'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <ClassApp />
     */}
  <FunctionApp />

  </StrictMode>,
)
