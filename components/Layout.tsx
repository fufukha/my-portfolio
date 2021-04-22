import {
  Container,
  createStyles,
  Fab,
  makeStyles,
  Toolbar,
  useScrollTrigger,
  Zoom
} from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import React from 'react'
import Header from './Header'
import Meta from './Meta'

type ScrollToTopProps = {
  children: React.ReactElement
}

const useStyles2 = makeStyles(() =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: '8%',
      right: '8%',
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
    height: `calc(100vh - ${mixins.toolbar.minHeight}px + 35px)`,
    paddingTop: '35px',
    paddingBottom: '70px',
  },
}))

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles()

  return (
    <>
      <Meta />
      <Header />
      <Toolbar id='back-to-top-anchor' disableGutters />
      <Container className={classes.container} maxWidth='md' component='main'>
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
