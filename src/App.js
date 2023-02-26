// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes as Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  
  //for Navbar
  const[mode,setMode]=useState("light");
  const textMode=`${mode==='dark'?'light':'dark'}`;
  const textColor=`${mode==='dark'?'white':'black'}`;
  
  const toggleMode=()=>{
    console.log('toogle');
    if(mode==='dark'){
      showAlert('success','Light mode enabled');
      setMode('light');
      document.body.style.backgroundColor="white";
    }
    else{
      document.body.style.backgroundColor="rgb(70, 62, 94)";
      setMode('dark');
      showAlert('success','Dark mode enabled');
    }
  }
  //
  //For Alert
  const [alert,setAlert]=useState(null);

  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      message:message

    })
    //timeOut to remove alert
    setTimeout(() => {
      setAlert(null);
    }, 700);

  }


  return (
    <>


    {/* <Router> */}
    <Navbar title={"Welcome to Text Editor"} mode={mode} toggleMode={toggleMode} textMode={textMode}
     ></Navbar>
    <Alert alert={alert}/>
      {/* <Switch> */}
        {/* <Route exact path="/" element={<Textform details={"Enter text to analize"}  textColor={textColor} mode={mode} showAlert={showAlert} />}></Route> */}
        {/* instead of above line write below line */}
        {/* <Route exact path="/about" element={<About/>}></Route> */}
        
        <Textform details={"Enter text to analize"}  textColor={textColor} mode={mode} showAlert={showAlert} />
      {/* </Switch> */}
    {/* </Router> */}

    </>
  );
}

export default App;
