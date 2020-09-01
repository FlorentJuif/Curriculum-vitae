import React from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto, Arial',
  },
})

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeProvider
