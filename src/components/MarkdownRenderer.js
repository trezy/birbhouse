// Module imports
import React, {
  createRef,
} from 'react'
import ReactMarkdown from 'react-markdown'





// Local imports
import config from 'helpers/reactMarkdownConfig'





export const MarkdownRenderer = props => {
  const markdownWrapperRef = createRef(null)

  return (
    <>
      <div ref={markdownWrapperRef}>
        <ReactMarkdown
          {...config}
          {...props} />
      </div>
    </>
  )
}
