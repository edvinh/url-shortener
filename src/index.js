import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import App from './containers/App'
import './index.css'

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
