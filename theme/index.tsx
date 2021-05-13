import grey from '@material-ui/core/colors/grey'
import purple from '@material-ui/core/colors/purple'
import cyan from '@material-ui/core/colors/cyan'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
      light: purple[100],
      dark: purple[900],
    },
    text: {
      primary: '#000000',
      secondary: grey[700],
    },
    background: {
      default: '#f3f2f4',
    },
    type: 'dark',
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
      fontSize: '1.25rem',
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
export { theme }

let darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
      light: cyan[100],
      dark: cyan[900],
    },
    text: {
      primary: '#fff',
      secondary: grey[400],
    },
    background: {
      paper: '#202022',
      default: '#151515',
    },
    type: 'dark',
  },
  typography: {
    fontFamily:
      'Gothic A1,-apple-system,BlinkMacSystemFont,Helvetica Neue, Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontFamily: 'Source Code Pro, monospace',
      fontSize: '3.5rem',
      fontWeight: 900,
      background: `linear-gradient(145deg, ${cyan[500]}, #00d4a7)`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textFillColor: 'transparent',
    },
    h2: {
      fontFamily: 'Source Code Pro, monospace',
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: '1.75rem',
      '-webkit-text-size-adjust': '100%',
      letterSpacing: '0.2px',
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
    MuiCssBaseline: {
      '@global': {
        '::selection': {
          background: cyan[200],
          opacity: 0.9,
          color: 'black',
        },
        ':focus': {
          outlineColor: cyan[500],
          outlineOffset: '5px',
        },
        html: {
          WebkitFontSmoothing: 'auto',
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: 'lowercase',
        fontWeidght: 400,
      },
    },
    MuiTypography: {
      root: {
        '& em': {
          fontStyle: 'normal',
          color: cyan[500],
          fontWeight: 500,
        },
      },
    },
  },
})

darkTheme = responsiveFontSizes(darkTheme)
export { darkTheme }
