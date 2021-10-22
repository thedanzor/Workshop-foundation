// External libraries
import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

// Routes
import Home from './pages/home'

// Router
const ApplicationRouter = () => {
  let location = useLocation()

  return <Switch location={location}>
    {/* Slash route - home */}
    <Route path="/" exact>
      <Home />
    </Route>
  </Switch>
}
export default ApplicationRouter
