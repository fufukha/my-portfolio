import grey from '@material-ui/core/colors/grey'
import orange from '@material-ui/core/colors/orange'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
      light: orange[100],
      dark: orange[900],
    },
    text: {
      secondary: grey[700],
    },
    background: {
      default: '#fafaf9',
    },
  },
  typography: {
    fontFamily:
      'Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue, Roboto, Helvetica, Arial, sans-serif',
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
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    body1: {
      fontSize: '0.875rem',
    },
    subtitle1: {
      fontSize: '0.625rem',
      letterSpacing: '3px',
      fontWeight: 700,
      textTransform: 'uppercase',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'lowercase',
        fontWeidght: 400,
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
