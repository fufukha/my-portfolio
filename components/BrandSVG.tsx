import { makeStyles } from '@material-ui/core'
import { Brands } from '../types'
import { getBrandSVG } from '../utilis/index'

const useStyles = makeStyles({
  root: (props: StyleProps) => ({
    display: 'inline-block',
    '& > svg': {
      width: props.width === undefined ? undefined : `${props.width}px`,
      color: props.color,
      height: props.height === undefined ? undefined : `${props.height}px`,
      '&  g': {
        color: props.color,
      },
    },
  }),
})

interface StyleProps {
  color: string | undefined
  width: number | undefined
  height: number | undefined
}

interface BrandSVGProps {
  width?: number
  height?: number
  name: Brands
  color?: string
  role?: string
}

const BrandSVG = ({ width, height, name, color, role }: BrandSVGProps) => {
  const props: StyleProps = { width, color, height }
  const classes = useStyles(props)

  return (
    <div className={classes.root} title={name} role={role} aria-label={name}>
      {getBrandSVG(name)}
    </div>
    )
}

export default BrandSVG
