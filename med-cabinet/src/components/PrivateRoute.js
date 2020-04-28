import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
        // ...rest is an object containing all the props except for component, which we have renamed to its capitalized form.
        {...rest}
        render={props => {
            // render component in props only if there is a token in localStorage
            if (localStorage.getItem('token')) {
                return <Component {...props} />
            } else {
                return <Redirect to="/" />
            }
        }}
    />
  )
}
export default PrivateRoute