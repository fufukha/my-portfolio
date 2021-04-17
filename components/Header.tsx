import { Theme } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import makeStyles from '@material-ui/styles/makeStyles'
import React from 'react'
import Menu from './Menu'

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
        <CssBaseline />
        <Toolbar>
          <Menu />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
