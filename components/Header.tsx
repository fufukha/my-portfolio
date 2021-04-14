import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
  return (
    <AppBar position='fixed' color='transparent' elevation={0}>
      <Toolbar component='header'>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
