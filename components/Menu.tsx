import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  SwipeableDrawer,
  Theme,
  Typography,
} from '@material-ui/core'
import { Code, GitHub, Mail, Menu as MenuIcon } from '@material-ui/icons'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { MenuLink, PersonalLinks } from '../types'

const useStyles = makeStyles<Theme>(({ typography }) => ({
  listContainer: {
    width: 250,
  },
  pathList: {
    padding: '20px',
    '&:before': {
      content: '"["',
      display: 'block',
      height: '30px',
      width: '100px',
      paddingLeft: '12px',
      fontFamily: typography.h2.fontFamily,
      fontSize: typography.body1.fontSize,
    },
    '&:after': {
      content: '"]"',
      display: 'block',
      height: '30px',
      width: '100px',
      paddingLeft: '12px',
      fontFamily: typography.h2.fontFamily,
      fontSize: typography.body1.fontSize,
    },
  },
  personalList: {
    padding: '35px 16px',
    '&:before': {
      content: '"{"',
      display: 'block',
      height: '30px',
      width: '100px',
      paddingLeft: '12px',
      fontFamily: typography.h2.fontFamily,
      fontSize: typography.body1.fontSize,
    },
    '&:after': {
      content: '"}"',
      display: 'block',
      height: '30px',
      width: '100px',
      paddingLeft: '12px',
      fontFamily: typography.h2.fontFamily,
      fontSize: typography.body1.fontSize,
    },
  },
  listItem: {
    paddingLeft: '40px',
    '& >  span': {
      fontFamily: typography.h2.fontFamily,
      fontSize: typography.body1.fontSize,
    },
  },
  listItemIcon: {
    minWidth: '40px',
    '&:after': {
      content: '":"',
      display: 'inline-block',
      height: '10px',
      width: '10px',
      paddingLeft: '3px',
      fontFamily: typography.h2.fontFamily,
      fontSize: typography.body1.fontSize,
    },
  },
}))

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()
  const pages = ['home', 'projects', 'journey']
  const personalLinks: PersonalLinks = [
    { name: MenuLink.NAME_GITHUB, href: MenuLink.HREF_GITHUB },
    { name: MenuLink.NAME_LEETCODE, href: MenuLink.HREF_LEETCODE },
    { name: MenuLink.NAME_EMAIL, href: MenuLink.HREF_EMAIL },
  ]
  const classes = useStyles()

  const handlePathClick = (path: string) => {
    if (path) router.push(path)
  }

  const toggleDrawer = (isOpen: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpen(isOpen)
  }

  const list = () => (
    <div
      className={classes.listContainer}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.pathList} component='nav'>
        {pages.map((page: string, i: number) => {
          const path = page === 'home' ? '/' : `/${page}`
          const color = router.pathname === path ? 'primary' : 'textPrimary'

          return (
            <ListItem
              className={classes.listItem}
              button
              component='a'
              selected={page === router.pathname}
              onClick={() => handlePathClick(path)}
              key={i}
            >
              <Typography
                component='span'
                color={color}
              >{`${page},`}</Typography>
            </ListItem>
          )
        })}
      </List>
      <Divider />
      <List className={classes.personalList} title='Personal links'>
        {personalLinks.map((link, i) => (
          <ListItem
            className={classes.listItem}
            button
            component='a'
            href={link.href}
            key={i}
          >
            <ListItemIcon className={classes.listItemIcon}>
              {link.name === MenuLink.NAME_GITHUB && (
                <GitHub fontSize='small' />
              )}
              {link.name === MenuLink.NAME_LEETCODE && (
                <Code fontSize='small' />
              )}
              {link.name === MenuLink.NAME_EMAIL && <Mail fontSize='small' />}
            </ListItemIcon>
            <Typography component='span'>{`${link.name},`}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  )
}

export default Menu
