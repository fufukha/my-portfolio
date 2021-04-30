import { makeStyles, Typography } from '@material-ui/core'
import TopicItem from './TopicItem'

const useStyles = makeStyles({
  container: {
    marginTop: '16px',
    minHeight: '47.97px',
  },
})

type TopicListProps = {
  topicList: string[]
}

const TopicList = ({ topicList }: TopicListProps) => {
  const topics = topicList.map((topic, i) => (
    <TopicItem key={i} role="listitem" topic={topic} />
  ))

  const classes = useStyles()

  return (
    <div role="list" aria-label="Topics" className={classes.container}>
      {topics}
    </div>
  )
}

export default TopicList
