import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import TopicList from './TopicList'

const useStyles = makeStyles({
  img: {
    width: '100%',
    height: '200px',
  },
})

const Repo = () => {
  const classes = useStyles()

  return (
    <Card elevation={2}>
      {/* <CardHeader title='typescript' subheader='Type in Arabic'></CardHeader> */}
      <CardContent component='header'>
        <Typography component='h3' variant='subtitle1' gutterBottom>
          typescript
        </Typography>
        <Typography component='h4' variant='h3'>
          Type in Arabic
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.img}
        component='img'
        src='/images/placeholder.png'
        title='webpage'
      />
      <CardContent>
        <Typography
          variant='body1'
          color='textSecondary'
          gutterBottom
          component='p'
        >
          Cras ac nisl metus. Maecenas eget dui risus. Nullam justo risus,
          luctus et bibendum vitae, elementum sed eros. Vestibulum tincidunt
          tortor quam, id volutpat arcu consequat ac.{' '}
        </Typography>
        <TopicList topicList={['typscript', 'reactJS', 'Apollo Client']} />
      </CardContent>
      <CardActions>
        <IconButton
          aria-label='Respository website'
          title='Repository website'
          href='https://google.com'
          component='a'
        >
          <LaunchIcon />
        </IconButton>
        <IconButton
          aria-label='Github respository'
          title='GitHub repository'
          href='https://github.com'
          component='a'
        >
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Repo
