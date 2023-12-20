import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState  } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);

    }, 50000);

  }
  const togglemode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      document.title = 'My-App Dark mode';
      showAlert("Dark mode has been enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title = 'My-App Light mode';
      showAlert("Light mode has been enabled" , "success");
    }
  }
  return (
    <>
      {/* <Navbar title = "my-app2" AboutText= "About Us"/> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title = "Textutils" mode={mode} togglemode = {togglemode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Switch>
                <Route exact path="/about">
                    <About mode={mode} />
                </Route>
                <Route exact path="/">
                    <TextForm showAlert = {showAlert} heading = "Enter the Text" mode={mode}/>
                </Route>
              </Switch>
            </div>
        </Router>
      </>
  
    );
  }

export default App;
