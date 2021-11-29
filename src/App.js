import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import React, { useState } from 'react'
import Alert from './components/Alert';


function App () {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        mesg: message,
        type : type
      })
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode Enabled","success" );

    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
    }
  }
  return (
    <section>
      <Navbar title="Text Editor By Kamal" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Textform showAlert={showAlert} mode={mode}/>
    </section>
  )
}

export default App
