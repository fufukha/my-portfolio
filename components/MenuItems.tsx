import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import { useRouter } from 'next/dist/client/router'

type MenuItemsProps = {
  handleClose: (path?: string) => void
}

const MenuItems = ({ handleClose }: MenuItemsProps) => {
  const router = useRouter()
  const pages = ['home', 'projects']

  const menuItems = pages.map((page, i) => {
    const path = page === 'home' ? '/' : `/${page}`
    const color = router.pathname === path ? 'primary' : 'textPrimary'

    return (
      <>
        {i === 0 && (
          <MenuItem disabled>
            <Typography variant='h2'>[</Typography>
          </MenuItem>
        )}
        <MenuItem onClick={() => handleClose(path)}>
          <Typography variant='h2' color={color}>{`${page},`}</Typography>
        </MenuItem>
        {i === pages.length - 1 && (
          <MenuItem disabled>
            <Typography variant='h2'>]</Typography>
          </MenuItem>
        )}
      </>
    )
  })

  return <>{menuItems}</>
}

export default MenuItems
