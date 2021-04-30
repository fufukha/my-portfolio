import { makeStyles, Theme } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles<Theme>(({ palette }) => ({
  topicContainer: {
    background: grey[800],
    display: 'inline-block',
    border: '1px solid transparent',
    borderRadius: '2em',
    padding: '0 10px',
    fontWeight: 700,
    fontSize: '12px',
    color: palette.primary.main,
    lineHeight: '18px',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    margin: '0 .4em .333em 0',
    textTransform: 'lowercase',
  },
}))

type TopicProps = {
  topic: string
  role: string
}

const TopicItem = ({ topic, role }: TopicProps) => {
  const classes = useStyles()

  return <div role={role} aria-label={topic} className={classes.topicContainer}>{topic}</div>
}

export default TopicItem
