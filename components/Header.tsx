import {
  AppBar,
  Container,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core'
import React from 'react'
import Menu from './Menu'
import Tabs from './Tabs'

interface ElevationScrollProps {
  children: React.ReactElement
}

function ElevationScroll({ children }: ElevationScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 10 : 0,
  })
}

const useStyles = makeStyles<Theme>(({ palette }) => ({
  appBar: {
    background: palette.background.default,
    '&  nav': {
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '12px',
      cursor: 'pointer',
      '& span': {
        width: '30px',
        height: '1px',
        margin: '0 10px',
        borderTop: `1px solid ${palette.text.secondary}`,
      },
    },
  },
  container: {
    display: 'flex',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <ElevationScroll>
      <AppBar
        className={classes.appBar}
        component='header'
        position='fixed'
        elevation={0}
      >
        <Toolbar disableGutters>
          <Container className={classes.container} maxWidth='md'>
            <a href='#main' tabIndex={0}>
              <Typography variant='srOnly'>Skip to Main</Typography>
            </a>
            <Menu />
            <Tabs />
          </Container>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
