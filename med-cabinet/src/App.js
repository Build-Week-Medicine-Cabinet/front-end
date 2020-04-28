import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/signup-form';
import  SignupForm from './components/signup-form';



function App() {
  return (
    <div className="App">
      
      <h1>Welcome to the app.</h1>
      <SignupForm/>
    </div>
  );
}

export default App;
