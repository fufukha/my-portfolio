import { makeStyles, Theme } from '@material-ui/core'
import { PaletteMainColors } from '../types'
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
    color: palette.primary.light,
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
}

const TopicItem = ({ topic }: TopicProps) => {
  const classes = useStyles()

  return <div className={classes.topicContainer}>{topic}</div>
}

export default TopicItem
