import React, { ReactChildren, ReactChild } from 'react'
import { highLightKeywords } from '../config/config.json'

interface HighlightTextProps {
  children: React.PropsWithChildren<string>
}

const HighlightText = ({ children }: HighlightTextProps) => {
  const keywords = `\\b${highLightKeywords.join('\\b|\\b')}\\b`
  const regexp = new RegExp(keywords, 'gi')

  const intro = children.split(' ').map((word) => {
    if (word.match(regexp)) {
      const lastChar = word[word.length - 1]
      if (lastChar.match(/[,.!?\\-]/g)) {
        return (
          <>
            <span>{word.substring(0, word.length - 1)}</span>
            {lastChar + ' '}
          </>
        )
      } else {
        return <span>{word + ' '}</span>
      }
    }
    return `${word} `
  })

  return <>{intro}</>
}

export default HighlightText
