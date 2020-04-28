import React from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import UserPage from './components/UserPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path={'/userpage'} component={UserPage}/>
      </Switch>
    </div>
  )
}

export default App
