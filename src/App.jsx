import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/textForm';
import About from './components/about';
import React, { useState } from 'react';
import Alert from './components/alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (msg, type) => {
    setAlert({
      msg,
      type

    });
    setTimeout(()=>setAlert(null),1500)

  }
   const toggleMode = () => {

    
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = '#fff';
      showAlert('Dark Mode Enabled', 'success');
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
   }

   const colorHandler = function (color) {
     document.body.style.backgroundColor = color;
     console.log(color)

   }

  return (
    // <>
    // <Navbar
    // title = "TextUtils"
    // aboutText = "About"
    // toggleMode={toggleMode}
    // mode={mode}
    // color={colorHandler}
    
    // />

    // <Alert alert={alert}/>

    // <TextForm
    // title = "Enter a text to Analyze"
    // mode={mode}
    // alert={showAlert}
    // />
    // {/* <About/> */}

    // </>
    <>
    <BrowserRouter>
     <Navbar
    title = "TextUtils"
    aboutText = "About"
    toggleMode={toggleMode}
    mode={mode}
    color={colorHandler}
    />
    <Alert alert={alert}/>
    <Routes>
    <Route exact path="/about" element={<About />}></Route>
    <Route exact path="/" element={
      <TextForm
      title = "Enter a text to Analyze"
      mode={mode}
      alert={showAlert}
      />
    }></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
