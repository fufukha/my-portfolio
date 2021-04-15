import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Menu from './Menu'

const Header = () => {
  return (
    <AppBar position='fixed' color='transparent' elevation={0}>
      <Toolbar component='header'>
        <Menu />
      </Toolbar>
    </AppBar>
  )
}

export default Header
