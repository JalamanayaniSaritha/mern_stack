import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JSX from '../app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JSX />
  </StrictMode>,
)