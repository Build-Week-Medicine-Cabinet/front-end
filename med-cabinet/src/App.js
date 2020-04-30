import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import SignupForm from './components/signup-form'
import SignInForm from './components/signInForm'
import PrivateRoute from './components/PrivateRoute'
import UserPage from './components/UserPage'
import './App.css'
import UserInputForm from './components/userInputForm'


function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path={'/userpage'} component={UserPage}/>
        <PrivateRoute exact path={'/addtreatment'} component={UserInputForm} />

        <Route exact path={'/signup'}>
          <h1>Welcome to the app new people!</h1>
          <SignupForm />
        </Route>
        <Route path={'/signInForm'}>
          <SignInForm />
        </Route>
        <Route exact path={'/login'}>
          <h1>Welcome to the app users!</h1>
          <SignInForm />
        </Route>
      </Switch>
    </div>
  )
}

export default App
