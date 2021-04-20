import { Menu as MuiMenu } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import {
  makeStyles
} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const useStyles = makeStyles(({ typography }) => ({
  menu: {
    paddingLeft: '10px',
    paddingRight: '10px',
    '& ul:first-child:before': {
      content: '"["',
      display: 'block',
      height: '30px',
      width: '100px',
      paddingLeft: '12px',
      fontFamily: typography.h2.fontFamily,
      fontSize: typography.h2.fontSize,
    },
    '& ul:last-child:after': {
      content: '"]"',
      display: 'block',
      height: '30px',
      width: '100px',
      paddingLeft: '12px',
      fontFamily: typography.h2.fontFamily,
      fontSize: typography.h2.fontSize,
    },
    '& span': {
      paddingLeft: '15px',
      paddingRight: '15px',
    },
  },
}))

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

  const menuItems = pages.map((page, i) => {
    const path = page === 'home' ? '/' : `/${page}`
    const color = router.pathname === path ? 'primary' : 'textPrimary'

    return (
        <MenuItem key={`${i}`} onClick={() => handleClose(path)}>
          <Typography component='span' variant='h2' color={color}>
            {`${page},`}
          </Typography>
        </MenuItem>
    )
  })

  const classes = useStyles()

  return (
    <>
      <Typography component='div' variant='h2'>
        [
      </Typography>
      <IconButton
        color='default'
        edge='start'
        aria-label='Open main navigation'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <MuiMenu
        className={classes.menu}
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
      <Typography component='div' variant='h2'>
        ]
      </Typography>
    </>
  )
}

export default Menu
