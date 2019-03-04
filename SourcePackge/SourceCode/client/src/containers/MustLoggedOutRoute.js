import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export default ({component: Component, exact, path, appState, isAuthenticated, ...rest}) => {
  
  return (
    <Route exact={exact} path={path} render={(props) => {
        return !isAuthenticated() ? <Component appState={appState} {...props} {...rest} /> : <Redirect to='/chat'/>
    }} />
  )
}
