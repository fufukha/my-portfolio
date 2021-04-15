import { Menu as MuiMenu } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import MenuItems from './MenuItems'

const Menu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const router = useRouter()

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = (path?: string) => {
    setAnchorEl(null)
    if (path) {
      router.push(path)
    }
  }

  return (
    <div>
      <IconButton
        color='inherit'
        edge='start'
        aria-label='Open main navigation'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <MuiMenu
        id='fade-menu'
        anchorEl={anchorEl}
        keepMounted
        TransitionComponent={Fade}
        elevation={1}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
        onClick={() => handleClose()}
      >
        <MenuItems handleClose={handleClose} />
      </MuiMenu>
    </div>
  )
}

export default Menu
