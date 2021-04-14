import { Container, makeStyles } from '@material-ui/core'
import Header from './Header'
import Meta from './Meta'
import Nav from './Nav'

type LayoutProps = {
  children: JSX.Element
}

const useStyles = makeStyles({
  container: {
    paddingTop: '96px',
  },
})

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles()

  return (
    <>
      <Meta />
      <Header />
      <Container className={classes.container} component='main'>{children}</Container>
      <Nav />
    </>
  )
}

export default Layout
