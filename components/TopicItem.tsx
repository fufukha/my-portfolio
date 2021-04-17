import { makeStyles, Theme } from '@material-ui/core'
import { PaletteMainColors, StyleProps } from '../types'

const useStyles = makeStyles<Theme, StyleProps>(({ palette }) => ({
  topicContainer: {
    background: ({ color }) => palette[color].light,
    display: 'inline-block',
    border: '1px solid transparent',
    borderRadius: '2em',
    padding: '0 10px',
    fontWeight: 700,
    fontSize: '12px',
    color: ({ color }) => palette[color].main,
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
  color?: PaletteMainColors
}

const TopicItem = ({ topic, color = 'primary' }: TopicProps) => {
  const styleProps: StyleProps = { color }
  const classes = useStyles(styleProps)

  return <div className={classes.topicContainer}>{topic}</div>
}

export default TopicItem
