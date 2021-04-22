import { makeStyles, Typography } from '@material-ui/core'
import TopicItem from './TopicItem'

const useStyles = makeStyles({
  container: {
    marginTop: '16px',
  },
})

type TopicListProps = {
  topicList: string[]
}

const TopicList = ({ topicList }: TopicListProps) => {
  const topics = topicList.map((topic, i) => (
    <TopicItem key={i} topic={topic} />
  ))

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography variant='srOnly'>Topics</Typography>
      {topics}
    </div>
  )
}

export default TopicList
