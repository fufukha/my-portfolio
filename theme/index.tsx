import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import grey from '@material-ui/core/colors/grey'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
    text: {
      secondary: grey[700]
    }
  },
  typography: {
    fontFamily: 'Gothic A1, Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '0.875rem'
    }
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'lowercase',
        fontWeidght: 400,
      }
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
