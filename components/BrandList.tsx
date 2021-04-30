import { makeStyles, Typography, Grid } from '@material-ui/core'
import { brandData } from '../utilis/index'
import BrandSVG from './BrandSVG'

const useStyles = makeStyles({
  technology: {
    width: '100%',
    margin: '0 auto 35px auto',
    '@media screen and (min-width: 960px)': {
      justifyContent: 'space-between',
      width: '90%',
    },
  },
})

const BrandList = () => {
  const classes = useStyles()

  const brandSVGs = brandData.map((brand, i) => (
    <Grid key={i} item>
      <BrandSVG role='listitem' name={brand.name} width={brand.width} height={brand.height} color={brand.color} />
    </Grid>
  ))

  return (
    <section>
      <Typography component='h4' variant='srOnly'>
        Technologies
      </Typography>
      <Grid container wrap='wrap' justify='center' spacing={3} role="list" className={classes.technology}>
        {brandSVGs}
      </Grid>
    </section>
  )
}

export default BrandList
