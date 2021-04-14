import { Container, makeStyles } from '@material-ui/core'
import Header from './Header'
import Meta from './Meta'

type LayoutProps = {
  children: JSX.Element
}

const useStyles = makeStyles({
  container: {
    padding: '96px 35px 35px 35px',
    height: '100vh',
  },
})

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles()

  return (
    <>
      <Meta />
      <Header />
      <Container className={classes.container} component='main'>{children}</Container>
    </>
  )
}

export default Layout
