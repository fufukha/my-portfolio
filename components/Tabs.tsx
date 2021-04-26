import { Link as MuiLink } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Paths } from '../types'

const Tabs = () => {
  const { pathname } = useRouter()
  const paths = [Paths.HOME, Paths.PROJECTS, Paths.JOURNEY]
  const pageName = (path: string) => {
    if (path === Paths.HOME) return 'home'
    return path.replace('/', '')
  }

  return (
    <nav role='tablist'>
      {paths.map((path, i, paths) => (
        <React.Fragment key={i}>
          <Link href={path} passHref>
            <MuiLink
              component='a'
              underline='none'
              variant='body1'
              role='tab'
              aria-controls={`nav-tabpanel-${i}`}
              tabIndex={i + 2}
              aria-current={path === pathname ? 'page' : undefined}
              title={pageName(path)}
              color={path === pathname ? 'primary' : 'textSecondary'}
            >
              {pageName(path)}
            </MuiLink>
          </Link>
          {i < paths.length - 1 && <span className='separator'></span>}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default Tabs
