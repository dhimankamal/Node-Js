import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import React, { useState } from 'react'


function App () {
  const [mode, setMode] = useState("light");

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
    }else{
      setMode('light');
    }
  }
  return (
    <section>
      <Navbar title="Text Editor By Kamal" mode={mode} toggleMode={toggleMode}/>
      <Textform />
    </section>
  )
}

export default App
