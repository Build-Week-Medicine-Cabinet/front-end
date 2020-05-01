import React from 'react'
import { Switch, Route, Link, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import SignupForm from './components/signup-form'
import SignInForm from './components/signInForm'
import PrivateRoute from './components/PrivateRoute'
import UserPage from './components/UserPage'
import EditForm from './components/EditForm'
import Expanded from './components/Expanded'
import UserInputForm from './components/userInputForm'
import logo from './logo.png'
import { StyledButton } from './components/styledComponents'
import './App.css'


function App() {
  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F6F8F7;
    padding: 0 20px;
  `

  const Img = styled.img`
    width: 400px;
  `


  const history = useHistory()
  const location = useLocation()

  const logout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <div className="App">
      <Nav>
        <Img src={logo} alt='medicabinet logo'/>
        <Link style={{textDecoration: 'none', color: 'black'}}to='/'>Home</Link>

        {/* if logged out display login link, if logged in display logout button */}
        {location.pathname === '/signup' || location.pathname === '/login' ? <Link to='/login'>Login</Link> : <StyledButton style={{backgroundColor: 'black'}} onClick={logout}>Logout</StyledButton>}
      </Nav>


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
