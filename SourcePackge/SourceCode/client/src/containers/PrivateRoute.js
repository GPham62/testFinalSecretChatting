import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export default ({component: Component, path, appState, isAuthenticated, ...rest}) => {
  
  return (
    <Route path={path} render={(props) => {
        return isAuthenticated() ? <Component appState={appState} {...props} {...rest} /> : <Redirect to='/'/>
    }} />
  )
}
