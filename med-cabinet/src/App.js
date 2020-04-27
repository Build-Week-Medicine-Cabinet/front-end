import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/signup-form';
import SignUpForm from './components/signup-form';



function App() {
  return (
    <div className="App">
      <SignUpForm></SignUpForm>
      <h1>Welcome to the app.</h1>
    </div>
  );
}

export default App;
