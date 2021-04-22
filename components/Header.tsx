import {
  AppBar,
  Container,
  CssBaseline,
  makeStyles,
  Theme,
  Toolbar,
  useScrollTrigger
} from '@material-ui/core'
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
        <Container maxWidth='lg'>
          <Toolbar>
            <Menu />
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
