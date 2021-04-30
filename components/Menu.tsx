import {
  Divider,
  IconButton,
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
import Link from 'next/link'
import { useState } from 'react'
import { MenuLink, Paths, PersonalLinks } from '../types'

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
    '& >  a, & >  span': {
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
  menuIcon: {
    position: 'relative',
    left: '-16px',
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
      <List className={classes.pathList} component='ul'>
        {pages.map((page: string, i: number) => {
          const path = page === 'home' ? Paths.HOME : `/${page}`
          const color = router.pathname === path ? 'primary' : 'textPrimary'

          return (
            <ListItem
              className={classes.listItem}
              button
              component='li'
              selected={page === router.pathname}
              key={i}
            >
              <Link href={path}>
                <Typography
                  component='a'
                  color={color}
                >{`${page},`}</Typography>
              </Link>
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
            target={link.name ===  'email' ? '_self' :'_blank'}
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
      <IconButton
        className={classes.menuIcon}
        tabIndex={1}
        edge='end'
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
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
