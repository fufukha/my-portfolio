import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
  },
  typography: {
    fontFamily: 'Goth A1, Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#595959',
    },
  },
  shape: {
    borderRadius: 0,
  },
})

theme = responsiveFontSizes(theme)

export default theme
