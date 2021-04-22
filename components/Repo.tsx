import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import TopicList from './TopicList'
import ProjectLinks from './ProjectLinks'

const useStyles = makeStyles({
  card: {
    width: '400px',
    '& > img': {
      width: '90%',
      height: '200px',
      margin: '0 auto',
      opacity: '0.8',
    },
  },
})

type RepoProps = {
  language: string
  title: string
  imageUrl: string
  description: string
  url?: string
  homepageUrl?: string
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
        className={classes.card}
    <Card
      id={title.replace(/[-_]/g, '')}
      elevation={0}
    >
      <CardContent component='header'>
        <Typography component='h4' variant='subtitle1' gutterBottom>
          {language}
        </Typography>
        <Typography component='h3' variant='h3'>
          {title.replace(/[-_]/g, ' ')}
        </Typography>
      </CardContent>
      {imageUrl && (
        <CardMedia
          component='img'
          src={imageUrl}
          title={`Screenshot of ${title}'s web application`}
        />
      )}
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
        <ProjectLinks homepageUrl={homepageUrl} url={url} />
      </CardActions>
    </Card>
  )
}

export default Repo
