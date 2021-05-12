import React, { ReactChildren, ReactChild } from 'react'
import { highLightKeywords } from '../config/config.json'

interface HighlightTextProps {
  children: React.PropsWithChildren<string>
}

const HighlightText = ({ children }: HighlightTextProps) => {
  const keywords = `\\b${highLightKeywords.join('\\b|\\b')}\\b`
  const regexp = new RegExp(keywords, 'gi')

  const newChildren = children.split(' ').map((word, i) => {
    if (word.match(regexp)) {
      const lastChar = word[word.length - 1]
      if (lastChar.match(/[,.!?\\-]/g)) {
        return (
          <>
            <span key={i}>{word.substring(0, word.length - 1)}</span>
            {lastChar + ' '}
          </>
        )
      } else {
        return <span key={i}>{word + ' '}</span>
      }
    }
    return <React.Fragment key={i}>{`${word} `}</React.Fragment>
  })

  return <>{newChildren}</>
}

export default HighlightText
