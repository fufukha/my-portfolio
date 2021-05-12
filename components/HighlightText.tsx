import { Typography, Icon, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  icon: {
    fontSize: '1.2rem',
    verticalAlign: 'text-bottom',
  },
})

interface HighlightTextProps {
  children: React.PropsWithChildren<string>
  words: string[]
}

const HighlightText = ({ children, words }: HighlightTextProps) => {
  const keywords = `(${words.join('\\b)|(\\b')})`
  const regexp = new RegExp(keywords, 'gi')
  const parts = children.split(regexp)

  const classes = useStyles()

  const newChildren = () => {
    let res = []
    let prevPart = ''

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]

      if (part !== undefined) {
        if (words.includes(part.toLowerCase())) {
          if (part === 'heart') {
            prevPart = part
            res.push(
              <React.Fragment key={i}>
                <Typography variant='srOnly'>heart</Typography>
                <Icon className={classes.icon} fontSize='small'>
                  favorite
                </Icon>
              </React.Fragment>
            )
          } else if (prevPart === 'heart') {
            res.push(<React.Fragment key={i}>{part}</React.Fragment>)
          } else {
            res.push(<em key={i}>{part}</em>)
          }
        } else {
          res.push(<React.Fragment key={i}>{part}</React.Fragment>)
        }
      }
    }
    return res
  }

  return <>{newChildren()}</>
}

export default HighlightText
