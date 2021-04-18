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
  card: {
    margin: '0 auto 35px auto',
    maxWidth: '400px',
    '& > img': {
      width: '100%',
      height: '200px',
    },
  },
})

type RepoProps = {
  language: string
  title: string
  imageUrl: string
  description: string
  url: string
  homepageUrl: string
  topics: string[]
}

const Repo = ({
  language,
  title,
  imageUrl,
  description,
  url,
  homepageUrl,
  topics,
}: RepoProps) => {
  const classes = useStyles()

  return (
    <Card className={classes.card} elevation={0}>
      <CardContent component='header'>
        <Typography component='h4' variant='subtitle1' gutterBottom>
          {language}
        </Typography>
        <Typography component='h3' variant='h3'>
          {title.replace(/[-_]/g, ' ')}
        </Typography>
      </CardContent>
      {imageUrl && <CardMedia component='img' src={imageUrl} title={`Screenshot of ${title}'s web application`} />}
      <CardContent>
        <Typography
          variant='body1'
          color='textSecondary'
          gutterBottom
          component='p'
        >
          {description}
        </Typography>
        <TopicList topicList={topics} />
      </CardContent>
      <CardActions>
        <IconButton
          aria-label='Project\s website'
          title='Project\s website'
          href={homepageUrl}
          component='a'
        >
          <LaunchIcon />
        </IconButton>
        <IconButton
          aria-label='Github respository'
          title='GitHub repository'
          href={url}
          component='a'
        >
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Repo
