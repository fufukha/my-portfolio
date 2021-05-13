import {
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core'
import TopicList from './TopicList'
import ProjectLinks from './ProjectLinks'

type ExperienceProps = {
  language: string
  title: string
  imageUrl: string
  url: string
  paragraphs: string[]
  homepageUrl: string
  topics: string[]
  timeframe: string
}

const useStyles = makeStyles({
  card: {
    margin: '0 auto 35px auto',
  },
})

const Experience = ({
  title,
  homepageUrl,
  url,
  topics,
  paragraphs,
  timeframe,
}: ExperienceProps) => {
  const collabTopics =
    title === 'xstream'
      ? [
          'react',
          'react-redux',
          'webpack',
          'web audio',
          'responsive-design',
          'firebase',
        ]
      : topics

  const classes = useStyles()

  const content = paragraphs.map((para) => (
    <Typography
      component='p'
      color='textSecondary'
      variant='body1'
      gutterBottom
    >
      {para}
    </Typography>
  ))

  return (
    <Card className={classes.card} elevation={0}>
      <CardContent>
        <Typography component='h3' variant='h3' gutterBottom>
          {title.replace(/[-_]/g, ' ')}
        </Typography>
        <Typography
          component='p'
          variant='subtitle2'
          color='textPrimary'
          gutterBottom
        >
          {timeframe}
        </Typography>
        {content}
        <TopicList topicList={collabTopics} />
      </CardContent>
      <CardActions>
        <ProjectLinks url={url} homepageUrl={homepageUrl} />
      </CardActions>
    </Card>
  )
}

export default Experience
