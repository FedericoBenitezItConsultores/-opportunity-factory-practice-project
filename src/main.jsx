import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { InfoPersona } from './components/InfoPersona.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InfoPersona />
  </StrictMode>,
)
