import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import SignupForm from './components/signup-form'
import PrivateRoute from './components/PrivateRoute'
import UserPage from './components/UserPage'
import SignInForm from './components/signInForm'
import UserInputForm from './components/userInputForm'
import './App.css'
import './components/signup-form'
import './components/signInForm'
import './components/userInputForm'

function App() {
  return (
    <div className="App">

      <Switch>
        <PrivateRoute exact path={'/userpage'} component={UserPage}/>
        <Route exact path={'/userpage-test'} component={UserPage}/>
        <Route path={'/signup-form'}>
       
          <h1>Welcome to the app.</h1>
          <SignupForm />
           </Route>
         <Route path={'/signInForm'}>
          <SignInForm />
        </Route>
        <Route path={'/userInputForm'}>
          <UserInputForm/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
