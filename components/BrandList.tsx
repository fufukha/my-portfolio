import { makeStyles, Typography } from '@material-ui/core'
import { brandData } from '../utilis/index'
import BrandSVG from './BrandSVG'

const useStyles = makeStyles({
  technology: {
    display: 'flex',
    flexWrap: 'wrap',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    marginBottom: '35px',
    '& > div': {
      padding: '12px',
    },
    '@media screen and (min-width: 960px)': {
      justifyContent: 'space-around',
      width: '90%',
    },
  },
})

const BrandList = () => {
  const classes = useStyles()

  const brandSVGs = brandData.map(brand => (
    <BrandSVG role='listitem' name={brand.name} width={brand.width} height={brand.height} color={brand.color} />
  ))

  return (
    <section>
      <Typography component='h4' variant='srOnly'>
        Technologies
      </Typography>
      <div role="list" className={classes.technology}>
        {brandSVGs}
      </div>
    </section>
  )
}

export default BrandList
