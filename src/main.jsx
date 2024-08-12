import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './Nav.jsx'
import DiaryEntry from './DiaryEntry.jsx'
import DiaryInput from './DiaryInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <DiaryInput/>
    <DiaryEntry/>
  </StrictMode>,
)
