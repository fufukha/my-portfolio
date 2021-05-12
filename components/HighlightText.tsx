import React, { ReactChildren, ReactChild } from 'react'
import { highLightKeywords } from '../config/config.json'

interface HighlightTextProps {
  children: React.PropsWithChildren<string>
}

const HighlightText = ({ children }: HighlightTextProps) => {
  const keywords = `\\b${highLightKeywords.join('\\b|\\b')}\\b`
  const regexp = new RegExp(keywords, 'gi')
  const parts = children.split(regexp)

  const newChildren = parts.map((part, i) => {
    if (part !== undefined) {
      if (highLightKeywords.includes(part.toLowerCase())) {
        return <em key={i}>{part}</em>
      }
      return <React.Fragment key={i}>{part}</React.Fragment>
    }
  })

  return <>{newChildren}</>
}

export default HighlightText
