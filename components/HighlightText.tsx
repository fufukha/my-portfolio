import React from 'react'

interface HighlightTextProps {
  children: React.PropsWithChildren<string>
  words: string[]
}

const HighlightText = ({ children, words }: HighlightTextProps) => {
  const keywords = `(${words.join('\\b)|(\\b')})`
  const regexp = new RegExp(keywords, 'gi')
  const parts = children.split(regexp)

  const newChildren = parts.map((part, i) => {
    if (part !== undefined) {
      if (words.includes(part.toLowerCase())) {
        return <em key={i}>{part}</em>
      }
      return <React.Fragment key={i}>{part}</React.Fragment>
    }
  })

  return <>{newChildren}</>
}

export default HighlightText
