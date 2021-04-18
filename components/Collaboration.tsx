import classes from '*.module.css'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
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
    margin: '0 auto 35px auto'
  }
})

const Collaboration = ({ title, homepageUrl, url, topics }: CollaborationProps) => {
  const collabTopics = title  === 'xstream' 
    ? ['react', 'react-redux', 'webpack', 'web audio', 'responsive-design', 'firebase']
    : topics

  const classes = useStyles()

  return (
    <Card className={classes.card} elevation={0}>
      <CardContent>
        <Typography component='h3' variant='h3'>
          {title.replace(/[-_]/g, ' ')}
        </Typography>
        {title === 'xstream' && (
          <Typography component='p' variant='subtitle2' gutterBottom>
            June 2019 - present
          </Typography>
        )}
        {title === 'xstream' && (
          <>
          <Typography component='p' variant='body1'>
            {'• Implemented new features independently or paired with senior developer'}
          </Typography>
          <Typography component='p' variant='body1'>
            {'• Brainstormed and designed new features'}
          </Typography>
          <Typography component='p' variant='body1'>
            {'• Created mock-ups using Figma and Sketchpad'}
          </Typography>
          <Typography component='p' variant='body1'>
            {'• Delivered a responsive application'}
          </Typography>
          <Typography component='p' variant='body1'>
            {'• Researched new technologies to provide technical insight'}
          </Typography>
          </>
        )}
        <TopicList topicList={collabTopics} />
      </CardContent>
      <CardActions>
        <IconButton
          aria-label='Respository website'
          title='Repository website'
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
