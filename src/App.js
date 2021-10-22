// 3rd party modules
import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Material UI - Used for extra element / modules such as form elements
import { ThemeProvider } from '@material-ui/core/styles'

// Internal modules
import ApplicationStyling, { materialUiTheme, GlobalStyle } from './styles'
import ApplicationRouting from './router'
import ApplicationState from './context'

// Main application wrapper
// Here we add our global styling, set global context and routing.
// We also use this wrapper inside storybook, to auto inherit all our state
// children will only be passed in storybook, otherwise it will load the whole app.
const RouterWrapper = ({ children }) => {
  const theme = materialUiTheme()

  return (
    <Router>
      <Switch>
        <Route path="*">
          <ApplicationStyling>
            <ThemeProvider theme={theme}>
              <ApplicationState>
                <GlobalStyle />
                {!children && <ApplicationRouting />}
                {children}
              </ApplicationState>
            </ThemeProvider>
          </ApplicationStyling>
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterWrapper
