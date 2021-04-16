import { Menu as MuiMenu } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const Menu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const router = useRouter()
  const pages = ['home', 'projects']

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = (path?: string) => {
    setAnchorEl(null)
    if (path) {
      router.push(path)
    }
  }

  const items = ['[', ...pages, ']']

  const menuItems = items.map((item, i) => {
    let path: string
    let onClick: React.MouseEventHandler | undefined
    let disabled = true
    let color: 'primary' | 'textPrimary' = 'textPrimary'

    if (i !== 0 || i !== pages.length - 1) {
      path = item === 'home' ? '/' : `/${item}`
      onClick = () => handleClose(path)
      disabled = false
      color = router.pathname === path ? 'primary' : 'textPrimary'
    }

    return (
      <MenuItem key={i} disabled={disabled} onClick={onClick}>
        <Typography variant='h2' color={color}>
          {item}
        </Typography>
      </MenuItem>
    )
  })

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
        {menuItems}
      </MuiMenu>
    </div>
  )
}

export default Menu
