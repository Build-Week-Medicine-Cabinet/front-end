
import React, {useEffect, useState} from 'react'
import './App.css'
import './components/signup-form'
import  SignupForm from './components/signup-form'

import { Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import UserPage from './components/UserPage'


function App() {
  return (
    <div className="App">

      

      <Switch>
        <PrivateRoute exact path={'/userpage'} component={UserPage}/>
        <Route path={'/signup-form'}/>
          <h1>Welcome to the app.</h1>
          <SignupForm/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
