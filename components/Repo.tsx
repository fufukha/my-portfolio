import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { motion } from 'framer-motion'
import { dim } from '../animation'
import ProjectLinks from './ProjectLinks'
import TopicList from './TopicList'

const useStyles = makeStyles(({ palette }) => ({
  card: {
    width: '100%',
    position: 'relative',
    '& > img': {
      width: '90%',
      height: '200px',
      margin: '0 auto',
      opacity: '0.8',
    },
  },
  overlay: {
    position: 'absolute',
    background: palette.background.default,
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  cardAction: {
    height: '64px',
  },
}))

type RepoProps = {
  language: string
  title: string
  imageUrl: string
  description: string
  url?: string
  homepageUrl?: string
  topics: string[]
  index: number
  hoverIndex: number | null
}

const Repo = ({
  language,
  title,
  imageUrl,
  description,
  url,
  homepageUrl,
  topics,
  index,
  hoverIndex,
}: RepoProps) => {
  const classes = useStyles()

  const isDimmed = (index: number) =>
    hoverIndex !== null && hoverIndex !== index

  return (
    <>
      <Card
        id={title.replace(/[-_]/g, '')}
        className={classes.card}
        elevation={0}
      >
        <motion.div
          className={classes.overlay}
          style={{display: isDimmed(index) ? 'block' : 'none'}}
          animate={isDimmed(index) ? dim.animate : undefined}
        ></motion.div>
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
        <CardActions className={classes.cardAction}>
          <ProjectLinks homepageUrl={homepageUrl} url={url} />
        </CardActions>
      </Card>
    </>
  )
}

export default Repo
