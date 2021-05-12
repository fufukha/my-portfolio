import { Link as MuiLink } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { paths } from '../config/config.json'

const Tabs = () => {
  const router = useRouter()

  return (
    <nav role='tablist'>
      {paths.map((path, i, paths) => (
        <React.Fragment key={i}>
          <Link href={path.href} passHref>
            <MuiLink
              component='a'
              underline='none'
              variant='body1'
              role='tab'
              aria-controls={`nav-tabpanel-${i}`}
              tabIndex={i + 2}
              aria-current={router.pathname === path.name ? 'page' : undefined}
              title={path.name}
              color={router.pathname === path.href ? 'primary' : 'textPrimary'}
            >
              {path.name}
            </MuiLink>
          </Link>
          {i < paths.length - 1 && <span className='separator'></span>}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default Tabs
