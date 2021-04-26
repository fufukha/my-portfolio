import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@material-ui/icons/'
import TopicList from './TopicList'

type CollaborationProps = {
  language: string
  title: string
  imageUrl: string
  url: string
  homepageUrl: string
  topics: string[]
}

const useStyles = makeStyles({
  card: {
    margin: '0 auto 35px auto',
  },
})

const Collaboration = ({
  title,
  homepageUrl,
  url,
  topics,
}: CollaborationProps) => {
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

  return (
    <Card className={classes.card} elevation={0}>
      <CardContent>
        <Typography component='h3' variant='h3' gutterBottom>
          {title.replace(/[-_]/g, ' ')}
        </Typography>
        {title === 'xstream' && (
          <Typography
            component='p'
            variant='subtitle2'
            color='textPrimary'
            gutterBottom
          >
            June 2019 - present
          </Typography>
        )}
        {title === 'xstream' && (
          <>
            <Typography
              component='p'
              color='textSecondary'
              variant='body1'
              gutterBottom
            >
              {
                '• Implemented new features independently or paired with senior developer'
              }
            </Typography>
            <Typography
              component='p'
              color='textSecondary'
              variant='body1'
              gutterBottom
            >
              {'• Brainstormed and designed new features'}
            </Typography>
            <Typography
              component='p'
              color='textSecondary'
              variant='body1'
              gutterBottom
            >
              {'• Created mock-ups using Figma and Sketchpad'}
            </Typography>
            <Typography
              component='p'
              color='textSecondary'
              variant='body1'
              gutterBottom
            >
              {'• Delivered a responsive application'}
            </Typography>
            <Typography
              component='p'
              color='textSecondary'
              variant='body1'
              gutterBottom
            >
              {'• Researched new technologies to provide technical insight'}
            </Typography>
          </>
        )}
        <TopicList topicList={collabTopics} />
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

export default Collaboration
