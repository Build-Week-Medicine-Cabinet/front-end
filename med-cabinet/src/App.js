import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import SignupForm from './components/signup-form'
import SignInForm from './components/signInForm'
import PrivateRoute from './components/PrivateRoute'
import UserPage from './components/UserPage'
import EditForm from './components/EditForm'
import Expanded from './components/Expanded'
import UserInputForm from './components/userInputForm'
import './App.css'

function App() {

  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path={'/userpage'} component={UserPage}/>
        <PrivateRoute exact path={'/addtreatment'} component={UserInputForm} />
        <PrivateRoute exact path={'/edittreatment'} component={EditForm} />
        <PrivateRoute exact path={'/expanded'} component={Expanded} />
        <Route exact path={'/signup'}>

          <h1>Welcome to the app new people!!</h1>
          <SignupForm />
        </Route>

        <Route exact path={'/login'}>
          <h1>Welcome to the app users!</h1>
          <SignInForm />
        </Route>
        {/* route to landing page*/}
        <Route exact path={'/'} component={() => { 
            window.location.href = 'https://medicabinett.netlify.app/'; 
            return null;
        }}/>
      </Switch>
    </div>
  )
}

export default App
