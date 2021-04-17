import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Zoom from '@material-ui/core/Zoom'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import React from 'react'
import Header from './Header'
import Meta from './Meta'

type ScrollToTopProps = {
  children: React.ReactElement
}

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
)

function ScrollTop(props: ScrollToTopProps) {
  const { children } = props
  const classes = useStyles2()
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}
type LayoutProps = {
  children: JSX.Element
}

const useStyles = makeStyles(({ mixins }) => ({
  container: {
    padding: '35px 35px 70px 35px',
    height: `calc(100vh - ${mixins.toolbar.minHeight}px)`,
  },
}))

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles()

  return (
    <>
      <Meta />
      <Header />
      <Toolbar id='back-to-top-anchor' disableGutters />
      <Container className={classes.container} component='main'>
        {children}
      </Container>
      <ScrollTop>
        <Fab color='primary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default Layout
