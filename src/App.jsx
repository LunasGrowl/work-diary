import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/Nav.jsx'
import DiaryEntry from './components/DiaryEntry.jsx'
import DiaryInput from './components/DiaryInput.jsx'
import { useState } from 'react'


const App = () => {

  const [change,setChange] = useState('0')

  return (
  <div id='app--container'>
    <NavBar/>
    <DiaryInput setChange = {setChange}/>
    <DiaryEntry change = {change} setChange = {setChange}/>
  </div>
  )
}

export default App